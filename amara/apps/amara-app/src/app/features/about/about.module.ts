import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { aboutRoutes } from './about.routes';
import { SharedModule } from '@amara/shared';
import { AboutService } from './services/about.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ AboutComponent ],
  imports: [
    RouterModule.forChild(aboutRoutes),
    SharedModule,
    CommonModule
  ],
  exports: [],
  providers: [ AboutService ]
})

export class AboutModule {}
