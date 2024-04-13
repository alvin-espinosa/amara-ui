import { Component } from '@angular/core';
import {  } from '@amara/shared';
import { AboutService } from './services/about.service';

@Component({
  selector: 'amara-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {

  public data = {};
  hasApiError = false;
  responseJson = '';
  constructor(private aboutService: AboutService) { }


  getData() {
    // this.aboutService.getAbout().subscribe((res: any) => {
    //   this.data = res.message;
    // });
    this.aboutService.getTest().subscribe({
      next: (res) => {        
        this.data = res;
        this.hasApiError = false;
        this.responseJson = JSON.stringify(res, null, 2).trim();
      },
      error: (exception) => {
        this.hasApiError = true;
        this.data = {
          error: exception
        }
      }
    });
  }
}
