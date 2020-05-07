import { Component, OnInit } from '@angular/core'
import { PropertyDetailService } from 'src/app/shared/property-detail.service'
import { COMMA, ENTER } from '@angular/cdk/keycodes'
import { MatChipInputEvent } from '@angular/material/chips'
import { BedService } from 'src/app/shared/bed.service'
import { Bed } from 'src/app/shared/models/bed'
import {
  FormBuilder,
  FormArray,
  Validators,
  FormGroup,
  FormControl,
  NgForm,NgModel
} from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { ToastrService } from 'ngx-toastr'
import { InstallationService } from 'src/app/shared/installation.service'
import { Router } from '@angular/router'
import { CategoriesService } from 'src/app/shared/categories.service'

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css'],
  providers: [PropertyDetailService],
})
export class PropertyAddComponent implements OnInit {
  public response: { dbPath: '' }
  imageUrl: string = '/assets/img/default-image.png'
  fileToUpload: File = null
  visible = true
  selectable = true
  removable = true
  addOnBlur = true
  readonly separatorKeysCodes: number[] = [ENTER, COMMA]
  beds: Bed[] 
  categoriesList : any[];
  PropertyForm= this.fb.group({
    Name : [''],
    Description:  [''],
    agency:   [''], 
    ServiceType:  [''],
    PropertyType:  [''],
    HousingType:  [''],
    LivingRoomCount:  [''],
    KitchenCount: [''],
    BathRoomCount:  [''],
    AccommodatesCount:  [''],
    Price:  [''],
    IsBoosted: [''],
    PriceType: [''],
    Currency:  [''],
    Status: [''],
    Installations:this.fb.array([])
  })

  constructor(
    /*private imageService : PropertyDetailService*/
    public service: PropertyDetailService,
    public installationService: InstallationService,
    public dialogbox: MatDialogRef<PropertyAddComponent>,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router:Router,
    public categoriesService: CategoriesService,
   
    
  ) {
    // this.getInstallations()
   
  }

  
  ngOnInit() {  }
  
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
    this.service.formData=this.PropertyForm.value;
    this.service.i=this.Installations.length;
    this.service.postPropertyDetail().subscribe((res) => {
      console.log("res of post property",res)
      //console.log('listInstallations', this.installationsList)
      this.toastr.success('Add  with Succes !')
      this.router.navigateByUrl('/property');
      this.resetForm()
      console.log("length of Installations ",this.service.i);
    },err=>{
      console.log("err in post proprty",err);
    
    })
   
  }

  getCategories(){
    this.categoriesService.getCategory().subscribe
    (data=>{
      console.log("list of categories ",data);
      this.categoriesList=data;
    })

  }

  public uploadFinished = (event) => {
    this.response = event
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0)
    //Show image preview
    var reader = new FileReader()
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result
    }
    reader.readAsDataURL(this.fileToUpload)
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm()
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
      Installations: null,
      Beds: null,
      PropImages: null,
      Location: null,
    }
  }


  onClose() {
    this.dialogbox.close()
    this.service.filter('register  click')
  }
  onClear() {
    this.resetForm()
  }

  remove(bed: Bed): void {
    const index = this.beds.indexOf(bed)

    if (index >= 0) {
      this.beds.splice(index, 1)
    }
  }
}
/*
  OnSubmit(Caption,Image){
   this.imageService.postFile(Caption.value,this.fileToUpload).subscribe(
     data =>{
       console.log('done');
       Caption.value = null;
       Image.value = null;
       this.imageUrl = "/assets/img/default-image.png";
     }
   );
  }
  */
 

// getInstallations(){
//   this.installationService.getInstallation()
//    .subscribe(data=>{
//     console.log(data)
//   this.installationsList = data ;
//   })
// }
