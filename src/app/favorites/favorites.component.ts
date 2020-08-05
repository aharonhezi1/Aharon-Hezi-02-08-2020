import { Component, OnInit, Output, EventEmitter, AfterViewChecked, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Location } from './../models/location.model';
import { AppState } from './../app.state';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  locations: Observable<Location[]>;
constructor(private store: Store < AppState > ) { }

ngOnInit(): void {
  this.locations = this.store.select('location')

  
  
}

}
