import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { EquipementService } from 'src/app/shared/Equipement.service';

@Component({
  selector: 'app-equipement-edit',
  templateUrl: './equipement-edit.component.html',
  styleUrls: ['./equipement-edit.component.css']
})
export class EquipementEditComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<EquipementEditComponent>,
    private service :EquipementService) { }

  ngOnInit(): void {
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
     Id:0,
     Name:'',
     Property:''
    }
  }
  onSubmit(form :NgForm){
    this.service.putEquipement(form.value).subscribe(
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
