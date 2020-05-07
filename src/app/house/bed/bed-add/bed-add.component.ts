import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { BedService } from 'src/app/shared/bed.service';
@Component({
  selector: 'app-bed-add',
  templateUrl: './bed-add.component.html',
  styleUrls: ['./bed-add.component.css']
})
export class BedAddComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<BedAddComponent>,
    private service :BedService) { }
    ngOnInit() {
      this.resetForm();
 
    }
    resetForm(form?:NgForm){
      if(form!=null)
      form.resetForm();
      this.service.formData = {
       IdBe:0,
       RoomNumber:0,
       Name:'',
       IdProp:'',
       Property:''
      }
    }
    onSubmit(form :NgForm){
      this.service.postBed(form.value).subscribe(
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
