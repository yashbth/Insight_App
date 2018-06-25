import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  page1 : boolean=true;
  page2 : boolean=false;
  page3 : boolean=false;
  page4 : boolean=false;
  page5 : boolean=false;
  page6 : boolean = false;
  hammerInitialized = true;
  flag:boolean=false;
  id:string;
  location: string;
  cluster:string;
  water_info=[];
  ro_info=[];
  constructor() { }
  averageVolume(info){
    return (info[1]["Total_Volume_Dispensed"]-info[0]["Total_Volume_Dispensed"])/(info[1]["length"]);
  }

}
