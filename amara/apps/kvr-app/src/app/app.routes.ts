import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const appRoutes: Route[] = [
    // {
    //     path: 'login',
    //     loadChildren: () =>
    //       import(
    //         '../app/features/authentication/authentication/authentication.module'
    //         ).then((m) => m.AuthenticationModule),
    // },
    {
        path: '',
        loadChildren: () => import('./app-shell/app-shell.module').then(m => m.AppShellModule),
        canActivate: [AuthGuard],
    },
    {
        path: '',
        component: AppComponent,
    },
];
