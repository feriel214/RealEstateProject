import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { LocationService } from 'src/app/shared/location.service';

@Component({
  selector: 'app-location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.css']
})
export class LocationAddComponent implements OnInit {

  constructor( public dialogbox: MatDialogRef<LocationAddComponent>,
    private service :LocationService) { }

    ngOnInit() {
      this.resetForm();

 
    }
    resetForm(form?:NgForm){
      if(form!=null)
      form.resetForm();
      this.service.formData = {
       IdLo:0,
       Country:'',
       State:'',
       City:'',
       Address:'',
       Latitude:0,
       Longitude:0 ,
       IdProp:0,
       Property:null 
      }
    }
    onSubmit(form :NgForm){
      this.service.postLocation(form.value).subscribe(
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
