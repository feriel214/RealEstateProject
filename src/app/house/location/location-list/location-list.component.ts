import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LocationAddComponent } from 'src/app/house/location/location-add/location-add.component';
import { LocationEditComponent } from 'src/app/house/location/location-edit/location-edit.component';
import { LocationService } from 'src/app/shared/location.service';
import { Location} from 'src/app/shared/models/location';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  
  listData:MatTableDataSource<any>;
  displayedColumns: string[] = ['Country','City', 'State','Address','Longitude','Latitude','Property','Options'];
  //dataSource: MatTableDataSource<InstallationListComponent>; //that var store the list of installation 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private service:LocationService,private dialog :MatDialog,
  private toastr: ToastrService) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.refreshEquipementList();
    })  
  }

  ngOnInit() {
    this.refreshEquipementList();
  }
  onEdit(instal :Location){
    this.service.formData=instal;
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(LocationEditComponent,dialogConfig);
  }
  OnDelete(id){
    if(confirm('Are you sure to delete ?')){
      this.service.deleteLocation(id).subscribe(
        res=>{
          this.refreshEquipementList();
          this.toastr.info('Delete with Succes !');
        }
      )
    }
   
  }


  
  onAdd(){
   const dialogConfig= new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(LocationAddComponent,dialogConfig);
  }

  refreshEquipementList(){
    this.service.getLocation().subscribe(res=>{
      // Assign the data to the data source for the table to render
     this.listData=new MatTableDataSource(res);
     this.listData.paginator = this.paginator;
    this.listData.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listData.filter = filterValue.trim().toLowerCase();

    if (this.listData.paginator) {
      this.listData.paginator.firstPage();
    }
  }




}
