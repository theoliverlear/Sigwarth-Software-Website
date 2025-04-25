import {
    Component,
    Inject,
    Input,
    OnChanges,
    Renderer2,
    SimpleChanges
} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Component({
    selector: 'ss-head',
    templateUrl: './ss-head.component.html'
})
export class SsHeadComponent implements OnChanges{
    static readonly DEFAULT_FAVICON: string = 'assets/favicon/logo.ico';
    @Input() title: string;
    @Input() stylesheets: string[];
    @Input() favicon: string = SsHeadComponent.DEFAULT_FAVICON;
    constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
        console.log('HeadComponent loaded');
        this.addFavicon(this.favicon);
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['title']) {
            this.updateTitle();
        }
    }
    private updateTitle() {
        if (this.title) {
            console.log('Updating title: ' + this.title);
            this.document.title = this.title;
        }
    }

    private addFavicon(path: string) {
        const link = this.renderer.createElement('link');
        link.rel = 'icon';
        link.href = path;
        this.renderer.appendChild(this.document.head, link);
    }
    private clearExisting(selector: string) {
        const existing = this.document.querySelectorAll(selector);
        existing.forEach((element) => {
            console.log('Removing existing element: ' + element);
            this.renderer.removeChild(this.document.head, element);
        });
    }
}