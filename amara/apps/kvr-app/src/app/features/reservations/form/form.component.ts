import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'amara-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formGroup = new FormGroup({
    contactPerson: new FormControl<string>('', [Validators.required]),
    contactNumber: new FormControl<string>('', [Validators.required]),
    emailAddress: new FormControl<string>('', [Validators.required]),
    reservationDate: new FormControl<Date>(new Date(), [Validators.required]),
    reservationTime: new FormControl<string>('', [Validators.required]),
    duration: new FormControl<number>(1, [Validators.required]),
  });
 
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      debugger
      // this.myParam = params['test']
  });
}
}
