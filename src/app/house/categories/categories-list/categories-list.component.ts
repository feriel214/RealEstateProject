import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { CategoriesService } from 'src/app/shared/categories.service';
import { CategoriesAddComponent } from '../categories-add/categories-add.component';
import { CategoriesEditComponent } from '../categories-edit/categories-edit.component';
import { Categories } from 'src/app/shared/models/categories';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  listData:MatTableDataSource<any>;
  displayedColumns: string[] = ['Id', 'Name', 'Status'];
  //dataSource: MatTableDataSource<CategoriesListComponent>; //that var store the list of Categories 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private service:CategoriesService,private dialog :MatDialog) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.refreshEquipementList();
    })  
  }

  ngOnInit() {
    this.refreshEquipementList();
  }
  onEdit(categ :Categories){
    this.service.formData=categ;
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(CategoriesEditComponent,dialogConfig);
  }
  onDelete(id :number){
    if(confirm("Are you sure to delete this Categories ?")){
      this.service.deleteCategory(id).subscribe(res=>{
        this.refreshEquipementList;
      })
    }
  }
  onAdd(){
   const dialogConfig= new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(CategoriesAddComponent,dialogConfig);
  }

  refreshEquipementList(){
    this.service.getCategory().subscribe(res=>{
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
