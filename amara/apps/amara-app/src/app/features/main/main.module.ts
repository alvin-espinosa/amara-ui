import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main.routes';
import { SharedModule } from '@amara/shared';
import { MainComponent } from './main.component';
import { AdsModule } from '../ads/ads.module';
import { NgMaterialsModule } from '@amara/ng-materials';



@NgModule({
  declarations: [ MainComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    SharedModule,
    AdsModule,
    NgMaterialsModule
  ]
})
export class MainModule { }
