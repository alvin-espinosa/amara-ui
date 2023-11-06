import { Route } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AboutComponent } from './about.component';

export const aboutRoutes: Route[] = [
  {
    path: '',
    component: AboutComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  }
];
