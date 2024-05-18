import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';

const routes: Routes = [
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
        path: 'reservations',
        loadChildren: () =>
          import('../features/reservations/reservations.module').then((m) => m.ReservationsModule),
      },
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppShellRoutingModule { }
