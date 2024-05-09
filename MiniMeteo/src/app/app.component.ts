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
  temp_minima: any;
  temp: any;
  temp_massima: any;
  clouds: any;
  desc: any;
  feelslike: any;
  alba: any;
  tramonto: any;
  apikey = '';
  loading = false;

  constructor() {}

  ngOnInit() {}

  prendiMeteo(citta: any) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+citta+'&appid='+this.apikey+'fd58d3198ab92761f1282d12dae7cd0a&units=metric')
    .then(response => response.json())
    .then(data => {
      this.temp = data['main']['temp']+ '° C';
      this.temp_minima = data['main']['temp_min'] + '° C';
      this.temp_massima = data['main']['temp_max'] + '° C';
      this.nome = data['name'];
      this.desc = data['weather'][0]['description'] ;
      this.clouds = data['clouds']['all'] + '%';
      this.alba = new Date(data['sys']['sunrise'] * 1000);
      this.tramonto = new Date(data['sys']['sunset'] * 1000);
      this.feelslike = data['main']['feels_like'] + '° C';
      this.loading = true;
    })}
}