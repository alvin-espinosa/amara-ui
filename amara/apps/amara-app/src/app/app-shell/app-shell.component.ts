import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { concatMap, map, tap } from 'rxjs';
import { NavigationMenuModel } from 'libs/shared/src/lib/models/navigation-menu.model';

@Component({
  selector: 'amara-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
})
export class AppShellComponent implements OnInit {

  navigationMenus: NavigationMenuModel[] = [];
  metadata = {};

  constructor(
    public authService: AuthService,
    private http: HttpClient) {}

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        // this.router.navigate(['/']);
      }
    });

    setTimeout(() => {
      this.navigationMenus = [
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'About',
          path: '/about',
        },
        {
          label: 'Contact',
          path: '/contact',
        },
      ];
    }, 1000);


    // this.authService.user$
    // .pipe(
    //   concatMap((user) =>
    //     // Use HttpClient to make the call
    //     this.http.get(
    //       encodeURI(`https://dev-amara.us.auth0.com/api/v2/users/${user?.sub}`)
    //     )
    //   ),
    //   map((user: any) => user.user_metadata),
    //   tap((meta) => (this.metadata = meta))
    // )
    // .subscribe();

  }



}

