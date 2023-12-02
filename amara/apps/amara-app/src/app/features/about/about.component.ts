import { Component } from '@angular/core';
import {  } from '@amara/shared';
import { AboutService } from './services/about.service';

@Component({
  selector: 'amara-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {

  public data = '';

  constructor(private aboutService: AboutService) { }

  getData() {
    this.aboutService.getAbout().subscribe((res: any) => {
      this.data = res.message;
    });
  }
}
