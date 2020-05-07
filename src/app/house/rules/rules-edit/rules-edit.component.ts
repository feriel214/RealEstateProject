import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { RulesService } from 'src/app/shared/Rules.service';

@Component({
  selector: 'app-rules-edit',
  templateUrl: './rules-edit.component.html',
  styleUrls: ['./rules-edit.component.css']
})
export class RulesEditComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<RulesEditComponent>,
    private service :RulesService) { }

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
    this.service.putRules(form.value).subscribe(
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
