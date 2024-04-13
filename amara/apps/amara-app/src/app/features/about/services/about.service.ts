import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private httpClient: HttpClient) { }

  getAbout() {
    return this.httpClient.get('/api');
  }

  getTest() {
    // return this.httpClient.get('https://localhost:7100/WeatherForecast');
    return this.httpClient.get('https://amara-app.azurewebsites.net/WeatherForecast');
  }
}
