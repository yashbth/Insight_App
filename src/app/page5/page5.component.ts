import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;
declare var FB : any;
@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {
  havent=false;
  moreDetails=false;
  welcomeGesture=false;
  url:string;
  constructor(private service : GlobalService,private router : Router,private route : ActivatedRoute) { }

  ngOnInit() {
    this.service.currPage=5;
    this.service.page5_flag=true;
    $('body').css({"backgroundColor":"#008282"});
    // $('body').css({"backgroundColor":"#008282"});
    // console.log(!this.service.location)
    if(!this.service.location){
      this.router.navigate(['../page1'],{relativeTo: this.route});
      window.location.reload();

    }
    setTimeout(()=>{
          this.welcomeGesture=true;
          setTimeout(()=>{
            this.moreDetails=true;
            this.url="https://swajal.in/monitor/%23/"+this.service.cluster+'/'+this.service.id+'/page1';
          },100)

    },300);
  }
  
share(){
      FB.ui({
        method: 'share',
        mobile_iframe: true,
        href: 'https://developers.facebook.com/docs/',
      }, function(response){});
    }
}
