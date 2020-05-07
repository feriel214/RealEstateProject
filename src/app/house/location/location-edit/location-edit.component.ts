import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { LocationService} from 'src/app/shared/location.service';


@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<LocationEditComponent>,
    private service :LocationService) { }

  ngOnInit(): void {
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
    this.service.putLocation(form.value).subscribe(
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
