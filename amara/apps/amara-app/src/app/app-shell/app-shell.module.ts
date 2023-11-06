import { NgModule } from '@angular/core';
import { AppShellComponent } from './app-shell.component';
import { appShellRoutes } from './app-shell.routes';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from '../nx-welcome.component';
import { SharedModule } from '@amara/shared';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppShellComponent, NxWelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appShellRoutes),
    SharedModule
  ],
  providers: [],
  bootstrap: [],
  exports: [AppShellComponent],
})
export class AppShellModule {}
