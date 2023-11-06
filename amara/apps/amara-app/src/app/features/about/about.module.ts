import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { aboutRoutes } from './about.routes';

@NgModule({
  declarations: [ AboutComponent ],
  imports: [
    RouterModule.forChild(aboutRoutes),
  ],
  exports: [],
})

export class AboutModule {}
