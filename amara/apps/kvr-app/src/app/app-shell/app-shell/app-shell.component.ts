import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'amara-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent {
  
  constructor( 
    @Inject(DOCUMENT) public document: Document,
  public auth: AuthService,
  public router: Router) { }

  public logOut() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }

}
