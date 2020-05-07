import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { InstallationService } from 'src/app/shared/installation.service';
import { InstallationAddComponent } from '../installation-add/installation-add.component';
import { InstallationEditComponent } from '../installation-edit/installation-edit.component';
import { Installation } from 'src/app/shared/models/installation';

@Component({
  selector: 'app-installation-list',
  templateUrl: './installation-list.component.html',
  styleUrls: ['./installation-list.component.css']
})
export class InstallationListComponent implements OnInit {
  
  listData:MatTableDataSource<any>;
  displayedColumns: string[] = ['Name','Property','Decription','Options'];
  //dataSource: MatTableDataSource<InstallationListComponent>; //that var store the list of installation 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private service:InstallationService,private dialog :MatDialog) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.refreshEquipementList();
    })  
  }

  ngOnInit() {
    this.refreshEquipementList();
  }
  onEdit(instal :Installation){
    this.service.formData=instal;
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(InstallationEditComponent,dialogConfig);
  }
  OnDelete(id :number){
    if(confirm("Are you sure to delete this Installation ?")){
      this.service.deleteInstallation(id).subscribe(res=>{
        this.refreshEquipementList;
      })
    }
  }
  onAdd(){
   const dialogConfig= new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(InstallationAddComponent,dialogConfig);
  }

  refreshEquipementList(){
    this.service.getInstallation().subscribe(res=>{
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
