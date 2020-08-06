import { Component} from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isFavoritesRoute = true
  constructor( public router: Router) {

    this.router.events.subscribe((e: RouterEvent) => {
      if (e instanceof NavigationEnd)
        this.isFavoritesRoute = e.url === '/favorites'
    })
    if(window.location.href.includes('/favorites')){
      this.isFavoritesRoute=true
    }
  }






}
