import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { AppState } from '../app.state';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
@Input()locationKey:string
@Output()removeLocation=new EventEmitter() 
@ViewChild('close', { static: false }) close: ElementRef;

  constructor() { 

  }
 removeLocationFromFavorites(){
   this.removeLocation.emit()
   this.close.nativeElement.click()
  }
  ngOnInit(): void {
  }

}
