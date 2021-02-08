import { Component, OnInit, Input } from '@angular/core';
import {UtilsFuncsService} from '../services/utils-funcs.service'
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
  constructor( private utilsFuncsService: UtilsFuncsService) { }
getDayName(date){
return (new Date(date)).toString().slice(0,3)
}
  ngOnInit(): void {
    this.day=this.getDayName(this.dayData.Date)
    this.degree=this.utilsFuncsService.fToC(this.dayData.Temperature.Maximum.Value)
    this.icon="../../assets/icons/"+this.dayData.Day.Icon+"-s.png"
  }

}
