import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {WeatherApiService}from '../services/weather-api.service'
@Component({
  selector: 'app-forecast5days',
  templateUrl: './forecast5days.component.html',
  styleUrls: ['./forecast5days.component.scss']
})
export class Forecast5daysComponent implements OnInit,OnChanges {
  weather5daysData;

@Input() locationKey:string;
  constructor(private weatherApiServise:WeatherApiService) { }
ngOnChanges(){
  this.weatherApiServise.get5daysForecast(this.locationKey).subscribe((res: any) => {
    
    if(res && res.DailyForecasts) {
        this.weather5daysData = res.DailyForecasts}
// console.log(res.DailyForecasts);

    });
}
  ngOnInit(): void {
  
  }

}
