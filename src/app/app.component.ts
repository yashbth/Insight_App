import { Component,OnInit, AfterViewInit,HostListener,AfterContentChecked, Inject } from '@angular/core';
import { GlobalService } from './global.service';
import { ActivationStart, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FetchDataService } from './fetch-data.service';
declare var $ : any;
declare var jQuery : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  load=false;

  constructor(){

   }

  
   ngOnInit(){

   }

}
