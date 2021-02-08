import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { WeatherApiService } from '../services/weather-api.service';
import { Location } from '../models/location.model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit,OnChanges {
  iconSrc: string;
  temperature: number;
  unit: string;
  WeatherText: string
  @Input() location: Location
  @Input() weatherStyle: string;
  constructor(private weatherApiServise: WeatherApiService, private router: Router) { }
  onfavorite() {
    this.router.navigate(['/home', this.location])
  }
ngOnChanges(){
  this.weatherApiServise.getCurrentWeather(this.location.key).subscribe((res: any) => {
    
    if (res[0] && res[0].Temperature) {
      this.iconSrc = "../../assets/icons/" + res[0].WeatherIcon + "-s.png"
      this.temperature = res[0].Temperature.Metric.Value;
      this.unit = res[0].Temperature.Metric.Unit
      this.WeatherText = res[0].WeatherText
    }
  })
}
  ngOnInit(): void {


  }

}
