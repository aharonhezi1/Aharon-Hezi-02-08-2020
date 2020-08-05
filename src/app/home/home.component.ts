import { Component, OnInit, Output, EventEmitter, AfterViewChecked, ChangeDetectorRef, OnChanges, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { WeatherApiService } from '../weather-api.service'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Location } from './../models/location.model';
import { AppState } from './../app.state';
import * as LocationActions from './../actions/location.actions';
import { Router, RouterEvent, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnChanges {
  // chosenLocationKey = "215854"
  // chosenLocation = "Tel Aviv"
  chosenLocation: Location={
    key:'215854',
    name:''
  }
  locationInput: string
  autoCompleteResults;
  
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
    // this.chosenLocationKey = value.Key
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
    (this.store.select('location')).subscribe((locations: Location[]) => {
      this.isLocationFavorite = locations.some(location => location.key === this.chosenLocation.key)
    })
    if (this.isLocationFavorite) {
      this.launch.nativeElement.click()

    } else {
      this.addLocationToFavorites(this.chosenLocation)
  }
  }
  ngOnChanges(){
    
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.chosenLocation = {
        key: params['key'] || '215854',
        name: params['name'] || 'Tel Aviv'
      };

    });
  


      (this.store.select('location')).subscribe((locations: Location[]) => {
        this.isLocationFavorite = locations.some(location => location.key === this.chosenLocation.key)
      })

  }

}
