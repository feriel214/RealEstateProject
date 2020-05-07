import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { RulesService } from 'src/app/shared/Rules.service';

@Component({
  selector: 'app-rules-add',
  templateUrl: './rules-add.component.html',
  styleUrls: ['./rules-add.component.css']
})
export class RulesAddComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<RulesAddComponent>,
    private service :RulesService) { }

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
      this.service.postRules(form.value).subscribe(
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
