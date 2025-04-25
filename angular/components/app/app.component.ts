import {AfterViewInit, Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map, mergeMap} from "rxjs";
import {globalParticles} from "../../assets/particleAssets";
declare var particlesJS: any;

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    title: string;
    constructor(private router: Router, private activatedRoot: ActivatedRoute) {

    }

    ngAfterViewInit(): void {
        particlesJS("particle-container", globalParticles);
    }

    ngOnInit() {
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd),
            map(() => this.activatedRoot),
            map((route) => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }),
            mergeMap((route) => route.data)
        ).subscribe((data) => {
            const metaInfo = data['meta'] || {};
            this.title = metaInfo['title'] || 'Sigwarth Software';
        });
    }
}