import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppShellRoutingModule } from './app-shell-routing.module';
import { AppShellComponent } from './app-shell.component';
import { SharedModule } from '@amara/shared';


@NgModule({
  declarations: [
    AppShellComponent,
    
  ],
  imports: [
    CommonModule,
    AppShellRoutingModule,
    SharedModule
  ]
})
export class AppShellModule { }
