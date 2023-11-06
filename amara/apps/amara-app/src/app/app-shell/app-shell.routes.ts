import { Route } from '@angular/router';
import { AppShellComponent } from './app-shell.component';

export const appShellRoutes: Route[] = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../features/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../features/about/about.module').then((m) => m.AboutModule),
      },
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  }
];
