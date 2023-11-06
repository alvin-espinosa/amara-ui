import { Component, Input } from '@angular/core';
import { NavigationMenuModel } from '../../models/navigation-menu.model';

@Component({
  selector: 'amara-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {

  @Input() navigationMenus: NavigationMenuModel[] = [];

}
