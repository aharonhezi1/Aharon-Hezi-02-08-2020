import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { favoritesReducer } from './reducers/location.reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { DailyWeatherComponent } from './daily-weather/daily-weather.component';
import { ModalComponent } from './modal/modal.component';
import { Forecast5daysComponent } from './forecast5days/forecast5days.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    CurrentWeatherComponent,
    DailyWeatherComponent,
    ModalComponent,
    Forecast5daysComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      location: favoritesReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
