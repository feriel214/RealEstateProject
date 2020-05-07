import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { PropertyDetailService } from 'src/app/shared/property-detail.service';
import { PropertyEditComponent } from '../property-edit/property-edit.component';
import { PropertyDetails } from 'src/app/shared/property-details';
import { PropertyAddComponent } from '../property-add/property-add.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { InstallationService } from 'src/app/shared/installation.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  listData:MatTableDataSource<any>;
  displayedColumns: string[] = [ 'Name', 'Description','agency','ServiceType','PropertyType','HousingType',
   'LivingRoomCount','BathRoomCount','KitchenCount','AccommodatesCount','Price','PriceType', 
   'Currency','IsBoosted','Status','Installations','Options'];
   installationsList: any [];
  //dataSource: MatTableDataSource<InstallationListComponent>; //that var store the list of installation 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private service:PropertyDetailService,private dialog :MatDialog,
    private toastr: ToastrService,private router:Router,public installationService:InstallationService) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.refreshPropertyList();
    }) 
    this.getInstallations() 
  }

  ngOnInit() {
    this.refreshPropertyList();
  }
  getInstallations(){
       this.installationService.getInstallation()
        .subscribe(data=>{
         console.log("list of installations",data)
       this.installationsList = data ;
       })
     }
  onEdit(instal :PropertyDetails){
    this.service.formData=instal;
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(PropertyEditComponent,dialogConfig);
  }
 
 /* onAdd(){
   const dialogConfig= new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(PropertyAddComponent,dialogConfig);
  }
  */
 
  refreshPropertyList(){ 
      this.service.getPropertyDetail().subscribe(res=>{
      // Assign the data to the data source for the table to render
      console.log(res);
     // console.log(res[0].Installations[0].Name);
     // console.log(res[0].Installations[res[0].Installations.length-1].Name);

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
  OnDelete(id){
    if(confirm('Are you sure to delete ?')){
      this.service.deletePropertyDetail(id).subscribe(
        res=>{
          this.refreshPropertyList();
          this.toastr.info('Delete with Succes !');
        }
      )
    }
   
  }






}
