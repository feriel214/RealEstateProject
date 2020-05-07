import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { InstallationService } from 'src/app/shared/installation.service';
import {MatTableDataSource} from '@angular/material/table';
import { PropertyDetailService } from 'src/app/shared/property-detail.service';

@Component({
  selector: 'app-installation-edit',
  templateUrl: './installation-edit.component.html',
  styleUrls: ['./installation-edit.component.css']
})
export class InstallationEditComponent implements OnInit {
  listData:MatTableDataSource<any>;
  constructor(public dialogbox: MatDialogRef<InstallationEditComponent>,
    private service :InstallationService, private serv:PropertyDetailService) {
      this.serv.listen().subscribe((m:any)=>{
        console.log(m);
        this.refreshPropertyList();
      })  
     }

  ngOnInit(): void {
    this.refreshPropertyList();
  } 
  //GET List Of Properties 
  refreshPropertyList(){ 
    this.serv.getPropertyDetail().subscribe(res=>{
    this.listData=new MatTableDataSource(res);
    console.log("we are in list of prperties in edit comonenet");
    console.log(res);
  })
}
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
     IdIns:0,
     IdProp:0,
     Name:'',
     Property:''
    }
  }
  onSubmit(form :NgForm){
    this.service.putInstallation(form.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }
  onClose(){
    this.dialogbox.close();
    this.service.filter('register  click');
   }
   onClear(){
    this.resetForm();
  }

}
