import {Route, Routes} from "@angular/router";
import {HomeComponent} from "../../components/pages/home/home.component";
export const homeRoute: Route = {
    path: '',
    component: HomeComponent,
    data: {
        meta: {
            title: 'Sigwarth Software'
        },
    }
}
export const routes: Routes = [
    homeRoute
];