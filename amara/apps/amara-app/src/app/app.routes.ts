import { Route } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./app-shell/app-shell.module').then(m => m.AppShellModule),
    canActivate: [AuthGuard],
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./features/main/main.module').then(m => m.MainModule),
  // },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  }
];
