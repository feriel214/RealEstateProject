import { Component, OnInit , ViewChild} from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { RulesService } from 'src/app/shared/Rules.service'
import { RulesAddComponent } from '../rules-add/rules-add.component'
import { RulesEditComponent } from '../rules-edit/rules-edit.component'
import { Rules } from 'src/app/shared/models/Rules'

@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html',
  styleUrls: ['./rules-list.component.css'],
})
export class RulesListComponent implements OnInit {
  listData: MatTableDataSource<any>
  displayedColumns: string[] = ['Id', 'Name', 'Property']
  //dataSource: MatTableDataSource<RulesListComponent>; //that var store the list of Rules

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
  @ViewChild(MatSort, { static: true }) sort: MatSort

  constructor(private service: RulesService, private dialog: MatDialog) {
    this.service.listen().subscribe((m: any) => {
      console.log(m)
      this.refreshEquipementList()
    })
  }

  ngOnInit() {
    this.refreshEquipementList()
  }
  onEdit(instal: Rules) {
    this.service.formData = instal
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '70%'
    this.dialog.open(RulesEditComponent, dialogConfig)
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this Rules ?')) {
      this.service.deleteRules(id).subscribe(res => {
        this.refreshEquipementList
      })
    }
  }
  onAdd() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '70%'
    this.dialog.open(RulesAddComponent, dialogConfig)
  }

  refreshEquipementList() {
    this.service.getRules().subscribe(res => {
      // Assign the data to the data source for the table to render
      this.listData = new MatTableDataSource(res)
      this.listData.paginator = this.paginator
      this.listData.sort = this.sort
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.listData.filter = filterValue.trim().toLowerCase()

    if (this.listData.paginator) {
      this.listData.paginator.firstPage()
    }
  }
}
