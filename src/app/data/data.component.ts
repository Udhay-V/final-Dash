import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../myservice.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  public data:any[] | undefined;
  
  constructor(private Myservice:AppserviceService) { }

  ngOnInit(){
    return this.Myservice.Getdata().subscribe((data:any[])=>{
      this.data=data;
   });
  }

}
