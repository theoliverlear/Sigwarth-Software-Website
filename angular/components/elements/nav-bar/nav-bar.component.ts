import {
  AfterViewInit,
  Component
} from '@angular/core';
import {navBarLinks} from "../../../assets/elementLinkAssets";
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements AfterViewInit {

  ngAfterViewInit() {

  }

  protected readonly navBarLinks = navBarLinks;
}
