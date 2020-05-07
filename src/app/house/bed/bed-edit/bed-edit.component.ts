import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { BedService } from 'src/app/shared/bed.service';
@Component({
  selector: 'app-bed-edit',
  templateUrl: './bed-edit.component.html',
  styleUrls: ['./bed-edit.component.css']
})
export class BedEditComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<BedEditComponent>,
    private service :BedService) { }

  ngOnInit(): void {
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
    this.service.putBed(form.value).subscribe(
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
