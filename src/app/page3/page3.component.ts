import { Component, OnInit,AfterViewInit,AfterContentChecked } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  x:number;
  constructor(private service : GlobalService,private router : Router,private route : ActivatedRoute) { }

  ngOnInit() {
    $('body').css({"backgroundColor":"#b79d59"});
    // $('body').css({"backgroundColor":"#f4ce51 !important"});
    console.log(!this.service.location);
    if(!this.service.location){
      this.router.navigate(['../page1'],{relativeTo: this.route});
      window.location.reload();
    }
    // $('body').css({"backgroundColor":"#b79d59"});
  this.x=this.service.water_info[1]["Total_Volume_Dispensed"]*15;
  // this.x =10001;
  console.log(this.service.water_info,this.x);

  }

  ngAfterViewInit(){
    this.count();
    // $('#oneLine').quickfit();
  }
 ngAfterContentChecked(){
   if(this.x>10000){
    $('.page3_counter,.fa').css({"font-size":"1.8em"})
   }
   if(this.x>100000){
    $('.page3_counter,.fa').css({"font-size":"1.5em"})
   }
 }
  count(){
    $('.page3_counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });

    });

  }

}
