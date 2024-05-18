import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubComponent } from './pub.component';

const routes: Routes = [
  {
    path: '',
    component: PubComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PubRoutingModule { }
