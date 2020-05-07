import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { CategoriesService } from 'src/app/shared/categories.service';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.css']
})
export class CategoriesAddComponent implements OnInit {

  
  constructor(public dialogbox: MatDialogRef<CategoriesAddComponent>,
    private service :CategoriesService) { }

    ngOnInit() {
      this.resetForm();
 
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
      this.service.postCategory(form.value).subscribe(
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
