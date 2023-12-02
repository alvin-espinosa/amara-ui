import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { SharedModule } from '@amara/shared';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    RouterModule.forChild(homeRoutes),
    SharedModule
  ],
  exports: [],
})

export class HomeModule {}
