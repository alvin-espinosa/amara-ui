import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { aboutRoutes } from './about.routes';
import { SharedModule } from '@amara/shared';

@NgModule({
  declarations: [ AboutComponent ],
  imports: [
    RouterModule.forChild(aboutRoutes),
    SharedModule
  ],
  exports: [],
})

export class AboutModule {}
