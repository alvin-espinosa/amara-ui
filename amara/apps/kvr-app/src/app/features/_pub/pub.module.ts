import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PubRoutingModule } from './pub-routing.module';
import { PubComponent } from './pub.component';
import { SharedModule } from '@amara/shared';

@NgModule({
  declarations: [PubComponent],
  imports: [
    CommonModule, 
    PubRoutingModule,
    SharedModule
  ],
})
export class PubModule {}
