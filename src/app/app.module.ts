import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { SlideDirective } from './slide.directive';
import {AppRoutingModuleModule} from './app-routing-module/app-routing-module.module'
import  'hammerjs'
import { GlobalService } from './global.service';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { FetchDataService } from './fetch-data.service';
import { HttpClientModule } from '@angular/common/http';
import { Cluster } from './cluster';

@NgModule({
  declarations: [
    AppComponent,
    SlideDirective,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModuleModule,
    HttpClientModule
  ],
  providers: [GlobalService,FetchDataService,Cluster],
  bootstrap: [AppComponent]
})
export class AppModule { }
