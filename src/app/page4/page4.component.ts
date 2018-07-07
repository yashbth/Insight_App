import { Component, OnInit,AfterViewInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
  x=[];
  weight=[];
  rand : string = Math.random().toString();
  constructor(private service : GlobalService,private router : Router,private route : ActivatedRoute) { }

  ngOnInit() {
    this.service.currPage=4;
    // $('body').css({"backgroundColor":"#008282"});
    $('body').css({"backgroundColor":"black"});
    console.log(!this.service.location)
    if(!this.service.location){
      this.router.navigate(['../page1'],{relativeTo: this.route});
      this.service.hammerInitialized=false;

    }
    this.x = this.formatToUnits(this.service.water_info[0]["Total_Volume_Dispensed"],0);
    // x = this.formatToUnits(500,0);
  
    this.weight = this.weightUnits(this.service.water_info[0]["Total_Volume_Dispensed"],2);
  }
  ngAfterViewInit(){
  console.log(this.x);

    this.count();
  }
  formatToUnits(number, precision) {
    const abbrev = ['', 'k', 'm', 'b', 't'];  
    const unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3)
    const order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length -1 ))
    const suffix = abbrev[order];
    let numberWithSuffix= [(number / Math.pow(10, order * 3)).toFixed(precision),suffix];
    return numberWithSuffix;
  }
  weightUnits(number,precision){
    number=number*20;
    const abbrev = ['gms', 'kgs', 'tonnes'];  
    const unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3)
    const order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length -1 ))
    
    const suffix = abbrev[order];
    console.log(suffix,order,unrangifiedOrder,number);
    let numberWithSuffix= [(number / Math.pow(10, order * 3)).toFixed(precision),suffix];
    return numberWithSuffix;
  }

  count(){
    $('.page4_counter').each(function () {
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
