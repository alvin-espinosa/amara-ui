import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservationFormComponent } from './features/reservation-form/reservation-form.component';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'kvr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kvr-app';

  constructor(public matDialog: MatDialog, private route: Router,) { }

  reservationForm(date: Date): void { 
    this.route.navigate(['/reservation-form']).then();
    // this.matDialog.open(ReservationFormComponent)
    // .afterClosed()
    // .pipe(tap((reservation) => {
    //   debugger
    //   window.alert(reservation)
    //   console.log(reservation);
    // }))
    // .subscribe();
    // console.log(date);
  }
}
