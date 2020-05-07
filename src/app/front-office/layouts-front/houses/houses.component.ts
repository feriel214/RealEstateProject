import { Component, OnInit } from '@angular/core';
import { PropertyDetailService } from 'src/app/shared/property-detail.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  listData:MatTableDataSource<any>;
  constructor( private service:PropertyDetailService ) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.refreshPropertyList();
    }) 
   }

   ngOnInit() {
    this.refreshPropertyList();
  }
 
  
  refreshPropertyList(){
    console.log("we are before the service in refresh");
    this.service.getPropertyDetail().subscribe(res=>{
      console.log("we are after the service in refresh");
      // Assign the data to the data source for the table to render
      console.log(res);
     this.listData=new MatTableDataSource(res);
    
    })
  }


}
