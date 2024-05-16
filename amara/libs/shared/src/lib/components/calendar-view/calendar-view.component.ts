import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import monthNames from '../../data/month-name.json';
// import weekDays from '../../data/day-name';
import { commonModel } from '../../models/common.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'amara-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  @Output() openRequestForm = new EventEmitter<Date>();

  public reservations: Date[] = [ 
    new Date(2024,3,25),
    new Date(2024,3,27),
    // new Date(2024,3,29),
    // new Date(2024,3,30)
  ];

  public weeks = 0;
  public firstDay = new Date();
  public totalDays = 0;
  public cells: number[] = [];
  
  public yearOptions: number[] = [];
  public monthOptions: commonModel[] = [];
  public weekDayOptions: commonModel[] = [];

  private now = new Date();

  formGroup = new FormGroup({
    monthSelected: new FormControl<number>(0, [Validators.required]),
    yearSelected: new FormControl<number>(0, [Validators.required]),
  });

  constructor(public matDialog: MatDialog) {
    this.weekDayOptions = [
      {
        id: 0,
        name: "Sunday"
    },
    {
      id: 1,
        name: "Monday"
    },
    {
      id: 2,
        name: "Tuesday"
    },
    {
      id: 3,
        name: "Wednesday"
    },
    {
      id: 4,
        name: "Thursday"
    },
    {
      id: 5,
        name: "Friday"
    },
    {
      id: 6,
        name: "Saturday"
    }
    ];
    // this.monthOptions = monthNames;
    this.yearOptions = [
      this.now.getUTCFullYear(), 
      this.now.getUTCFullYear() + 1
    ];
  }

  ngOnInit(): void {
    this.formGroup.controls.monthSelected.setValue(this.now.getUTCMonth());
    this.formGroup.controls.yearSelected.setValue(this.now.getUTCFullYear());
    this.showCalendarDays(this.now.getUTCMonth(), this.now.getUTCFullYear());
    this.onControlsValueChanged();
  }

  public getBackgroundColor(day: number): string {
    const isPreviousDay = this.isPastDay(day);
    const isReserved = this.isReserved(day);
    if (isPreviousDay) {
      return '#AFB0AF';
    } else if (isReserved) {
      return '#EC3116';
    } else {
     return '#47CE04'; // available      
    }
  }

  public getCursor(day: number): string {
    if (this.isPastDay(day) || this.isReserved(day)) {
      return 'invalid-date';
    }

    return 'valid-date';
  }

  public isPastDay(day: number): boolean {
    const selectedDate = new Date(
      this.formGroup.controls.yearSelected.value ?? this.now.getUTCFullYear(),
      this.formGroup.controls.monthSelected.value ?? this.now.getUTCMonth(), 
      day);

    return this.now >= selectedDate;
  }

  public isToday(day: number): boolean {
    return this.now.getDate() === day && 
       this.now.getUTCMonth() === this.formGroup.controls.monthSelected.value &&
       this.now.getUTCFullYear() === this.formGroup.controls.yearSelected.value;
  }

  public isReserved(day: number): boolean {
    const selectedDate = new Date(
      this.formGroup.controls.yearSelected.value ?? this.now.getUTCFullYear(),
      this.formGroup.controls.monthSelected.value ?? this.now.getUTCMonth(), 
      day);

    return !!this.reservations.find(d => 
      d.getDate() === selectedDate.getDate() &&
      d.getUTCMonth() === selectedDate.getUTCMonth() &&
      d.getUTCFullYear() === selectedDate.getUTCFullYear() 
    );
  }

  public onControlsValueChanged() {
    this.formGroup.controls.monthSelected.valueChanges
      .pipe(tap((value) => {
        const year = this.formGroup.get('yearSelected')?.value ?? this.now.getUTCFullYear();
        const month = value ?? this.now.getUTCMonth();
        this.showCalendarDays(month, year);
      }))
      .subscribe();

    this.formGroup.controls.yearSelected.valueChanges
      .pipe(tap((value) => {
        const year = value ?? this.now.getUTCFullYear();
        const month = this.formGroup.get('monthSelected')?.value ?? this.now.getUTCMonth();
        this.showCalendarDays(month, year);
      }))
      .subscribe();
  }

  public onNext(): void {
    let month = this.formGroup.controls.monthSelected.value ?? 1;
    let year = this.formGroup.controls.yearSelected.value ?? this.now.getUTCFullYear();
    if (month === 11) {
      month = 0;      
      if (this.yearOptions.find(y => y === year + 1)) {
        year = year + 1;
      } else {
        return;
      }
    } else {
      month = month + 1;
    }
    this.formGroup.controls.monthSelected.setValue(month);
    this.formGroup.controls.yearSelected.setValue(year);
    this.showCalendarDays(month, year);
  }

  public onPrevious(): void {
    let month = this.formGroup.controls.monthSelected.value ?? 1;
    let year = this.formGroup.controls.yearSelected.value ?? this.now.getUTCFullYear();
    if (month === 0) {
      month = 11;
      if (this.yearOptions.find(y => y === year - 1)) {
        year = year - 1;
      } else {
        return;
      }
    } else {
      month = month - 1;
    }
    this.formGroup.controls.monthSelected.setValue(month);
    this.formGroup.controls.yearSelected.setValue(year);
    this.showCalendarDays(month, year);
  }

  public onReservation(day: number): void {
    if(this.isPastDay(day) || this.isReserved(day)) {
      return;
    }
    // this.matDialog.open()
    //   .afterClosed()
    //   .pipe()
    //   .subscribe();
    // window.alert(`Is valid: ${day}, you can continue.`);

    const selectedDate = new Date(
      this.formGroup.controls.yearSelected.value ?? this.now.getUTCFullYear(),
      this.formGroup.controls.monthSelected.value ?? this.now.getUTCMonth(), 
      day);

    this.openRequestForm.emit(selectedDate);
  }

  private showCalendarDays(month: number, year: number): void {
    this.cells = [];
    this.firstDay = new Date(year, month ?? this.now.getUTCFullYear(), 1);
    this.totalDays = new Date(year, month + 1, 0).getDate();

    if(this.firstDay.getDay() === 6 || (this.firstDay.getDay() === 5 && this.totalDays === 31)) {
      this.weeks = 6;
    } else if (this.firstDay.getDay() === 0 && this.firstDay.getMonth() === 1) { // 1 = February
      this.weeks = 4;
    } else {
      this.weeks = 5;
    }
    
    const count = this.weeks * 7;
    let i = 0;
    while (count > i ) {
      this.cells.push(i)
      i++;
    }
  }

}
