import { Component, OnInit,AfterViewInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  intro="This machine is currently equivalent to"
  Co2=[];
  tree_equivalent;
  constructor(private service : GlobalService ,private router : Router,private route : ActivatedRoute) { }

  ngOnInit() {
    // $('body').css({"backgroundColor":"#008282"});
    $('body').css({"backgroundColor":"#b4c95e"});
    if(!this.service.location){
      this.router.navigate(['../page1'],{relativeTo: this.route});
      // window.location.reload();
      this.service.hammerInitialized=false;
    }
    this.Co2=this.weightUnits(this.service.water_info[0]["Total_Volume_Dispensed"],2);
    this.tree_equivalent= Math.floor(this.service.average_volume*0.093/0.0596);
  }
  ngAfterViewInit(){
    this.count();
    // let clone=setInterval(()=>{
    //   $("img").first().clone().appendTo(".img");
    // },500);
    // setTimeout(()=>{
    //   clearInterval(clone);
    // },3000);
  }
  weightUnits(number,precision){
    number=number*93;
    const abbrev = ['gms', 'kgs', 'tonnes'];  
    const unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3)
    const order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length -1 ))
    
    const suffix = abbrev[order];
    console.log(suffix,order,unrangifiedOrder,number);
    let numberWithSuffix= [(number / Math.pow(10, order * 3)).toFixed(precision),suffix];
    return numberWithSuffix;
  }
  count(){
    $('.page2_counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

  }

}
