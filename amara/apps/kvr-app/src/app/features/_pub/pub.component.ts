import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'amara-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.scss'],
})
export class PubComponent {

  constructor(public router: Router) { }

  public login(): void {
    this.router.navigate(['./v1']);
  }

  public reservationForm() {
    this.router.navigate(['./v1/reservations/form']);
  }

}
