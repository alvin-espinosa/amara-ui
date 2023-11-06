import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    RouterModule.forChild(homeRoutes),
  ],
  exports: [],
})

export class HomeModule {}
