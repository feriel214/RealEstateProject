import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { CategoriesService } from 'src/app/shared/categories.service';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<CategoriesEditComponent>,
    private service :CategoriesService) { }

  ngOnInit(): void {
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
     IdCa:0,
     Name:'',
     Status:false
    }
  }
  onSubmit(form :NgForm){
    this.service.putCategory(form.value).subscribe(
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
