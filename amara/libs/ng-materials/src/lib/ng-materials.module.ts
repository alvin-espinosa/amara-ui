import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { MatButtonModule } from '@angular/material/button';

import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    // MatButtonModule
  ],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class NgMaterialsModule {}
