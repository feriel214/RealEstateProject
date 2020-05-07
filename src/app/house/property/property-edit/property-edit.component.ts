import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { PropertyDetailService } from 'src/app/shared/property-detail.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormArray,
  Validators,
  FormGroup,
  FormControl,
  NgModel
} from '@angular/forms'


@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.css']
})
export class PropertyEditComponent implements OnInit {
 
  PropertyForm= this.fb.group({
    IdProp:[this.service.formData.IdProp],
    Name : [this.service.formData.Name],
    Description: [this.service.formData.Description],
    agency: [this.service.formData.agency], 
    ServiceType: [this.service.formData.ServiceType],
    PropertyType: [this.service.formData.PropertyType],
    HousingType:[this.service.formData.HousingType],
    LivingRoomCount:[this.service.formData.LivingRoomCount],
    KitchenCount:[this.service.formData.KitchenCount],
    BathRoomCount:[this.service.formData.BathRoomCount],
    AccommodatesCount:[this.service.formData.AccommodatesCount],
    Price:[this.service.formData.Price],
    IsBoosted:[this.service.formData.IsBoosted],
    PriceType:[this.service.formData.PriceType],
    Currency:[this.service.formData.Currency],
    Status:[this.service.formData.Status],
    Installations:this.fb.array([
      this.service.formData.Installations[0]
    ])
 

  })
  constructor(public dialogbox: MatDialogRef<PropertyEditComponent>,
    public service :PropertyDetailService ,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router:Router,) {
    
     }

  ngOnInit(): void {
  }
  get Installations(){
    return  this.PropertyForm.get('Installations') as FormArray;
   }
   addInstallations(){
     this.Installations.push(this.fb.control(''));
 
   }
   removeInstall(index){
     console.log("we clicked in remove Install");
     this.Installations.removeAt(index);
     this.toastr.success('Install deleted  with Succes !')
   }
   Onsubmit(){
     console.log("clicked on submit")
     console.log("property form value ",this.PropertyForm.value);
     this.service.i=this.Installations.length;
     
     this.service.formData=this.PropertyForm.value;
     this.service.putPropertyDetail().subscribe((res) => {
       console.log("res of put property",res)
       //console.log('listInstallations', this.installationsList)
       this.toastr.success('Edit  with Succes !')
       this.router.navigateByUrl('/property');
       console.log("length of Installations ",this.service.i);
     },err=>{
       console.log("err in post proprty",err);
     
     })
    }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      IdProp: 0,
      Name: '',
      Description: '',
      agency: '',
      ServiceType: null,
      PropertyType: null,
      HousingType: null,
      LivingRoomCount: 0,
      KitchenCount: 0,
      BathRoomCount: 0,
      AccommodatesCount: 0,
      Price: 0,
      IsBoosted: false,
      PriceType: 0,
      Currency: 0,
      Status: false,
      Installations : null, 
      Beds: null, 
      PropImages: null,
      Location:null
    }
  }
  //Edit 
  onSubmit(form :NgForm){
    this.service.putPropertyDetail().subscribe(
      res=>{
          console.log("succes update ");
          this.toastr.success('Updtaed with Succes ! ');
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
