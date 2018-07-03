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
  message:string;
  constructor(){

   }

  
   ngOnInit(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.message="Err! Has your phone fallen down?";
  }
  else{
    this.message = "Wanna get amazed? Try using your phone instead."
  }
   }

}
