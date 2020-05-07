import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Equipement } from 'src/app/shared/models/equipement';
import { EquipementService } from 'src/app/shared/Equipement.service';
import { EquipementAddComponent } from '../equipement-add/equipement-add.component';
import { EquipementEditComponent } from '../equipement-edit/equipement-edit.component';

@Component({
  selector: 'app-equipement-list',
  templateUrl: './equipement-list.component.html',
  styleUrls: ['./equipement-list.component.css']
})
export class EquipementListComponent implements OnInit {

  
  listData:MatTableDataSource<any>;
  displayedColumns: string[] = ['Id', 'Name', 'Property'];
  //dataSource: MatTableDataSource<InstallationListComponent>; //that var store the list of installation 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private service:EquipementService,private dialog :MatDialog) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.refreshEquipementList();
    })  
  }

  ngOnInit() {
    this.refreshEquipementList();
  }
  onEdit(equip :Equipement){
    this.service.formData=equip;
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(EquipementEditComponent,dialogConfig);
  }
  onDelete(id :number){
    if(confirm("Are you sure to delete this Installation ?")){
      this.service.deleteEquipement(id).subscribe(res=>{
        this.refreshEquipementList;
      })
    }
  }
  onAdd(){
   const dialogConfig= new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EquipementAddComponent,dialogConfig);
  }

  refreshEquipementList(){
    this.service.getEquipement().subscribe(res=>{
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
