import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { WeatherApiService } from '../services/weather-api.service'
import { Store } from '@ngrx/store';
import { Location } from './../models/location.model';
import { AppState } from './../app.state';
import * as LocationActions from './../actions/location.actions';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

  chosenLocation: Location={
    key:'',
    name:''
  }
  locationInput: string
  autoCompleteResults;
  storeSubscription;
  isLocationFavorite: boolean;
  @ViewChild('launch', { static: false }) launch: ElementRef;

  constructor(private weatherApiServise: WeatherApiService, private store: Store<AppState>, private route: ActivatedRoute) { }
  onChangeInput() {
    if (this.locationInput.length > 1) {
      this.weatherApiServise.getLocation(this.locationInput).subscribe((res:any)=>{
        console.log(res);
        
        this.autoCompleteResults=res.map(result=>(
          { LocalizedName: result.LocalizedName, Key: result.Key }

        ))
      })
    } else {
      this.autoCompleteResults = null
    }
  }
  onKeyDownCheckIfLetter(event) {
    const key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8);
  }
  onChooseLocation(value) {
    this.locationInput = value.LocalizedName
    this.autoCompleteResults = null
    this.chosenLocation = { name: value.LocalizedName, key: value.Key };
    (this.store.select('location')).subscribe((locations: Location[]) => {
      this.isLocationFavorite = locations.some(location => location.key === this.chosenLocation.key)
    })
  }
  addLocationToFavorites(location: Location) {
    this.store.dispatch(new LocationActions.AddLocation(location))
  }
  removeLocationFromFavorites() {
    this.store.dispatch(new LocationActions.RemoveLocation(this.chosenLocation.key))
  }
  onFavorites() {

    if (this.isLocationFavorite) {
      this.launch.nativeElement.click()

    } else {
      this.addLocationToFavorites(this.chosenLocation)
  }
  }
 
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.chosenLocation = {
        key: params['key'] || '215854',
        name: params['name'] || 'Tel Aviv'
      };
    });
    this.storeSubscription=  (this.store.select('location')).subscribe((locations: Location[]) => {
        this.isLocationFavorite = locations.some(location => location.key === this.chosenLocation.key)
      })

  }
  ngOnDestroy(){
    this.storeSubscription.unsubscribe()
  }

}
