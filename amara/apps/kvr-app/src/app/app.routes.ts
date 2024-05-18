import { Route } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

export const appRoutes: Route[] = [
    {
        path: 'v1',
        loadChildren: () => import('./app-shell/app-shell.module').then(m => m.AppShellModule),
        canActivate: [AuthGuard],
    },
    {
        path: '',
        loadChildren: () => import('./features/_pub/pub.module').then(m => m.PubModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
    }
];
