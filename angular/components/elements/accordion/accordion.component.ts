// accordion.component.ts 
import {Component, HostBinding, HostListener, Input} from "@angular/core";
import {
    ImageAsset, plusIconImageAsset,
    whitePlusIconImageAsset
} from "../../../assets/imageAssets";
import {accordionPopAnimation} from "../../animations/animations";
import {DelayService} from "../../../services/delay.service";

@Component({
    selector: 'accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css'],
    animations: [
        accordionPopAnimation
    ]
})
export class AccordionComponent {
    @Input() protected title: string;
    protected isExpanded = false;
    @HostBinding('class.accordion-triggered') protected triggered: boolean;
    constructor(private delayService: DelayService) {
        
    }
    public toggleExpansion(): void {
        this.isExpanded = !this.isExpanded
    }
    @HostListener('click')
    public trigger(): void {
        this.triggered = true;
        this.toggleExpansion();
        this.delayService.delay(500).then((): void => {
            this.triggered = false;
        });
    }
    protected readonly whitePlusIconImageAsset: ImageAsset = whitePlusIconImageAsset;
}
