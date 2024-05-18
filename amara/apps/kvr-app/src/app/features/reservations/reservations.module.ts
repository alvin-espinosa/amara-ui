import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ReservationsRoutingModule,    
  ],
  providers: [
    
  ]
})
export class ReservationsModule { }
