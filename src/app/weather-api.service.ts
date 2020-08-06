import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
// private apiKey='J975htmM8Cf8rDYhSu1gttZwL0nYdfE0'
private apiKey='AKiepHEt71fly1l6pRa5zWApmthU3jjE'
  constructor(private http: HttpClient) { }

  getLocation(text) {
    return this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${text}`)
}
getCurrentWeather(locationKey) {

    
    return this.http.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${this.apiKey}`)
    
  }
    get5daysForecast(locationKey) {

    return this.http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${this.apiKey}`)
}

}
