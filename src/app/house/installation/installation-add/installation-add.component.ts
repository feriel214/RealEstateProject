import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { InstallationService } from 'src/app/shared/installation.service';
import { PropertyDetailService } from 'src/app/shared/property-detail.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-installation-add',
  templateUrl: './installation-add.component.html',
  styleUrls: ['./installation-add.component.css']
})
export class InstallationAddComponent implements OnInit {
  personsData: any
  subscription: Subscription
  constructor(public dialogbox: MatDialogRef<InstallationAddComponent>,
    private service :InstallationService, private servP: PropertyDetailService) {
      this.getProperties()
    this.subscription = this.servP.getMessage().subscribe(personBody => {
      if (personBody) {
        console.log('personBody', personBody)
        this.personsData.push(personBody)
      }
    })
     }


    ngOnInit() {
      this.resetForm();
 
    }
     getProperties(){
      this.servP.getPropertyDetail().subscribe(res=>{
        // Assign the data to the data source for the table to render
        console.log(res);
        this.personsData = res;
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
      this.service.postInstallation(form.value).subscribe(
        res=>{
          console.log(res);
          this.resetForm();
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
