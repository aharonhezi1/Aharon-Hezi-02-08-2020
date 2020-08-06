import { Component, OnInit, Input } from '@angular/core';
import {fToC} from '../../assets/FtoC'

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss']
})
export class DailyWeatherComponent implements OnInit {

@Input() dayData: any
icon:string;
day:string;
degree:number;
  constructor() { }
getDayName(date){
return (new Date(date)).toString().slice(0,3)
}
  ngOnInit(): void {
    this.day=this.getDayName(this.dayData.Date)
    this.degree=fToC(this.dayData.Temperature.Maximum.Value)
    this.icon="../../assets/icons/"+this.dayData.Day.Icon+"-s.png"
  }

}
