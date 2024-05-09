import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minimeteo';
  nome: any;
  temp: any;
  clouds: any;
  desc: any;
  feelslike: any;
  apikey = '';
  loading = false;

  constructor() {}

  ngOnInit() {}

  prendiMeteo(citta: any) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+citta+'&appid='+this.apikey+'fd58d3198ab92761f1282d12dae7cd0a')
    .then(response => response.json())
    .then(data => {
      this.temp = data['main']['temp'];
      this.nome = data['name'];
      this.desc = data['weather'][0]['description'];
      this.clouds = data['clouds']['all'];
      this.feelslike = data['main']['feels_like'];
      this.loading = true;
    })}
}