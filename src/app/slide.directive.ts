import {Directive, ElementRef,Input, Output, EventEmitter, AfterContentChecked} from '@angular/core';
import { GlobalService } from './global.service';
import { Router } from '@angular/router';

declare var Hammer : any;
declare var $ : any;

@Directive({
  selector: '[appSlide]'
})
export class SlideDirective implements AfterContentChecked {
  @Input('prevpage') prevpage:String;
  @Input('currpage') currpage:String;
  @Input('nextpage') nextpage:String;
  @Output() onGesture = new EventEmitter();
   static hammerInitialized = false;
  constructor(private el: ElementRef,private service : GlobalService,private router : Router) {

  }
  ngAfterContentChecked() {
  
      if (!SlideDirective.hammerInitialized && (this.prevpage!='' && this.nextpage !='')) {

          let hammertime = new Hammer(this.el.nativeElement);
          hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
          hammertime.on("swipeup", (ev) => {
              this.onGesture.emit("swipeup");
              let nextpage= this.nextpage;
              console.log(this.nextpage);
            //   $('.'+this.currpage).addClass("slideOutUp");
              SlideDirective.hammerInitialized=false;
            this.router.navigateByUrl('/'+this.service.cluster+'/'+this.service.id+'/'+this.nextpage);

          });
          hammertime.on("swipedown", (ev) => {
              console.log("down");
              let currpage = this.currpage;
              this.onGesture.emit("swipedown");
              let prevpage= this.prevpage;

              SlideDirective.hammerInitialized=false;
              this.router.navigateByUrl('/'+this.service.cluster+'/'+this.service.id+'/'+this.prevpage);

          });
          if(!(this.service.page5_flag&&this.service.currPage==1)){
            hammertime.on("tap",(ev)=>{
              let nextpage= this.nextpage;
              console.log(this.nextpage);
            //   $('.'+this.currpage).addClass("slideOutUp");
              SlideDirective.hammerInitialized=false;
            this.router.navigateByUrl('/'+this.service.cluster+'/'+this.service.id+'/'+this.nextpage);
            })
          }
          SlideDirective.hammerInitialized=true;



      }


  }
  
}
