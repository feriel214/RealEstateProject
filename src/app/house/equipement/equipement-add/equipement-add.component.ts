import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { EquipementService } from 'src/app/shared/Equipement.service';

@Component({
  selector: 'app-equipement-add',
  templateUrl: './equipement-add.component.html',
  styleUrls: ['./equipement-add.component.css']
})
export class EquipementAddComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<EquipementAddComponent>,
    private service :EquipementService) { }

    ngOnInit() {
      this.resetForm();
 
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
      this.service.postEquipement(form.value).subscribe(
        res=>{
          console.log('we are in post ..');
          this.resetForm();
          alert(res);
        }
      )
      console.log('form submit clicked..');
    }
    onClose(){
     this.dialogbox.close();
     this.service.filter('register  click');
    }
    onClear(){
      this.resetForm();
    }
  


}
