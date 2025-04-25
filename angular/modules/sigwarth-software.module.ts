import {NgModule} from "@angular/core";
import {directives} from "../directives/directives";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "../components/app/app.component";
import {AppRoutingModule} from "./routing/app-routing.module";
import {elements} from "../components/elements/elements";
import {services} from "../services/services";
import {pages} from "../components/pages/pages";

@NgModule({
    declarations: [
        AppComponent,
        ...directives,
        ...elements,
        ...pages,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        RouterOutlet,
        NgOptimizedImage,
        HttpClientModule],
    providers: [
        ...services
    ],
    bootstrap: [AppComponent],
    exports: [],
    schemas: []
})
export class SigwarthSoftwareModule {
    constructor() {

    }
}