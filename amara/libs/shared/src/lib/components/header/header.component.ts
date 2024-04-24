import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'amara-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService,
    private route: ActivatedRoute,
    public router: Router) {}

  public redirectToHome() {
    this.router.navigate(['./v1'], {
      relativeTo: this.route
    });
  }

  public logOut() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }
}
