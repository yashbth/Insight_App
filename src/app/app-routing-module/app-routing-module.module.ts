import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from '../page1/page1.component';
import { Page2Component } from '../page2/page2.component';
import { Page3Component } from '../page3/page3.component';
import { Page4Component } from '../page4/page4.component';
import { Page5Component } from '../page5/page5.component';

const routes : Routes=[
  {path:':cluster/:id/page1',component:Page1Component},
  {path:':cluster/:id/page2',component:Page2Component},
  {path:':cluster/:id/page3',component:Page3Component},
  {path:':cluster/:id/page4',component:Page4Component},
  {path:':cluster/:id/page5',component:Page5Component},
]
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes,{useHash:true}) ],
  declarations: []
})
export class AppRoutingModuleModule { }
