import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { reservationModel } from '../models/reservation.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kvr-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent {

  public formGroup = new FormGroup({
    contactPerson: new FormControl<string>('', [Validators.required]),
    contactNumber: new FormControl<string>('', [Validators.required]),
    emailAddress: new FormControl<string>('', [Validators.required]),
    reservationDate: new FormControl<Date>(new Date(), [Validators.required]),
    reservationTime: new FormControl<string>('', [Validators.required]),
    duration: new FormControl<number>(1, [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<ReservationFormComponent>,) { }

  save() {

    
    this.closeDialog({
      contactNumber: '09557265331'
    } as reservationModel);
  }

  cancel() {
    this.closeDialog({} as reservationModel);
  }

  private closeDialog(result: reservationModel) {
    this.dialogRef.close(result);
  }

}
