import { Component, OnInit,AfterViewInit, } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { GlobalService } from '../global.service';
import { Cluster} from '../cluster';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


declare var $:any;

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  title = 'ID :';
  id :string= "VSDMDV11802AAY";
  location : string = "Gwal Pahri";
  circular_cards=[{title:"pH",name:"pH_of_water",color:"blue",unit:""},{title:"Tds Inlet",name:"tds_inlet",color:"red",unit:""},{title:"Tds Outlet",name:"tds_outlet",color:"green",unit:""},];
  water_info =[];
  ro_info=[];
  table1;
  table2;
  dataAvailable=false;
  flag=false;
  share : boolean = false;
  status: string = "Let's see";

  constructor(private dataService : FetchDataService, private service: GlobalService,private router :Router,private route : ActivatedRoute,private Cluster : Cluster) {
   
   }

  ngOnInit() {
    this.service.currPage=1;
    if(this.service.page5_flag){
      this.share=true;
      this.status="Share";

    }
    $('body').css({"backgroundColor":"#008282"});
    // $('body').css("backgroundColor","#b79d59");

    if(!this.service.info_flag){
      setTimeout(()=>{
        this.service.cluster = this.route.snapshot.paramMap.get('cluster');
        this.service.id= this.route.snapshot.paramMap.get('id');
        this.tables()
        this.dataService.getData(this.service.id,this.table1,'id_info.php').subscribe(info=>this.water_info=info,(err)=>console.log(err),()=>{
          this.dataService.getData(this.service.id,this.table2,'tds_info.php').subscribe(info=>this.ro_info=info,(err)=>console.log(err),()=>{
            for(let row of this.water_info){
              row["Total_Volume_Dispensed"] = row["Total_Volume_Dispensed"].replace(",","");
            }
            console.log(this.water_info);
            this.water_info[0]=$.extend( this.water_info[0],this.ro_info[0] );
            this.service.water_info=this.water_info;
            this.service.location= this.ro_info[0]['Location']; 
            this.service.average_volume=this.service.averageVolume(this.water_info);
            // console.log(this.water_info);
            this.dataAvailable=true;
            $('.pH_of_water').html(this.water_info[0]['pH_of_water']);
            $('.tds_inlet').html(this.water_info[0]['tds_inlet']);
            $('.tds_outlet').html(this.water_info[0]['tds_outlet']);
            this.count('count');
          });
        })
      })
      this.service.info_flag=true;

    }



  }
  ngAfterViewInit(){
    if(this.service.info_flag){
      $('.pH_of_water').html(this.service.water_info[0]['pH_of_water']);
      $('.tds_inlet').html(this.service.water_info[0]['tds_inlet']);
      $('.tds_outlet').html(this.service.water_info[0]['tds_outlet']);
      this.count('count');
    }


  }

  tables(){
    console.log(this.service.cluster)
    this.table1 = this.Cluster[this.service.cluster][0];
    this.table2 = this.Cluster[this.service.cluster][1];
  }
  count(page){
    $('.'+page).each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            },

        });
    });
    setTimeout(()=>{
    this.flag=true;
    },1500)
  }
}
