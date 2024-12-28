import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import '@angular/compiler'; // Ensure this is available for JIT
import { environment } from "./environments/environment";
import { enableProdMode } from "@angular/core";
import {SigwarthSoftwareModule} from "./modules/sigwarth-software.module";

// if (environment.production) {
//     enableProdMode();
// }

console.log('main.ts loaded');

platformBrowserDynamic().bootstrapModule(SigwarthSoftwareModule)
    .catch(err => console.error(err));
