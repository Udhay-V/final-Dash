import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  public showHeader:boolean = true
  public routeSubscribe: any;

  constructor(location: Location, router: Router)
   {
      router.events.subscribe((val) => {
        if(location.path() == '' || location.path() == "/login" || location.path() == "/signup" ) 
        {
          this.showHeader = false;
        }
         else 
        {
          this.showHeader = true;
        }
      });
    }
}

