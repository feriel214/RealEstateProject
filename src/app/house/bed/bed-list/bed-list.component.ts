import { Component, OnInit , ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { BedService } from 'src/app/shared/bed.service'
import { Bed } from 'src/app/shared/models/bed';
import { BedAddComponent } from '../bed-add/bed-add.component';
import { BedEditComponent } from '../bed-edit/bed-edit.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-bed-list',
  templateUrl: './bed-list.component.html',
  styleUrls: ['./bed-list.component.css']
})
export class BedListComponent implements OnInit {

  listData:MatTableDataSource<any>;
  displayedColumns: string[] = ['RoomNumber','Name','Property','Options'];
  //dataSource: MatTableDataSource<InstallationListComponent>; //that var store the list of installation 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private service: BedService ,private dialog :MatDialog,
  private toastr: ToastrService) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.refreshEquipementList();
    })  
  }

  ngOnInit() {
    this.refreshEquipementList();
  }
  onEdit(instal :Bed){
    this.service.formData=instal;
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(BedEditComponent,dialogConfig);
  }
  OnDelete(id :number){
    if(confirm("Are you sure to delete this Bed ?")){
      this.service.deleteBed(id).subscribe(res=>{
      this.refreshEquipementList();
        this.toastr.info('Delete with Succes !');
      })
    }
  }
  onAdd(){
   const dialogConfig= new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(BedAddComponent,dialogConfig);
  }

  refreshEquipementList(){
    this.service.getBed().subscribe(res=>{
      // Assign the data to the data source for the table to render
      console.log(res);
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
