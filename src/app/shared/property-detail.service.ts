import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { PropertyDetails } from '../shared/property-details';
import { FormBuilder, Validators, FormGroup ,FormControl} from '@angular/forms';
import { Observable, throwError, Subject } from 'rxjs'
import { Installation } from './models/installation'

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailService {
  formData = new PropertyDetails();
  constructor( private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:5000/api';
  list : PropertyDetails[];
  private subject = new Subject<any>()
  i:number;
  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Password: ['', [Validators.required,Validators.minLength(4)]],
    ConfirmPassword: ['', Validators.required],
    
   

      /*  Passwords: this.fb.group({
      Password: ['', [Validators.required,Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })*/  
  });
  PropertyModel =this.fb.group({
    Name :['', Validators.required],
    Description:['', Validators.required],
    agency: ['', Validators.required], 
    ServiceType:['', Validators.required],
    PropertyType: ['', Validators.required] ,
    HousingType:['', Validators.required],
    LivingRoomCount:['', Validators.required],
    KitchenCount:['', Validators.required],
    BathroomCount:['', Validators.required],
    AccommodatesCount:['', Validators.required],
    Price:['', Validators.required],
    IsBoosted:['', Validators.required],
    PriceType:['', Validators.required],
    Currency:['', Validators.required],
    Status:['', Validators.required]
  });
 
  postFile(caption: string, fileToUpload: File) {
    const endpoint = 'http://localhost:5000/api/UploadImage';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    return this.http
      .post(endpoint, formData);
  }
  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }
  // User Registration
  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Password
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }
   // User Login 
  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }
  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
  // Redirection after login 
  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
    
  }
    // Get a Property
    getPropertyDetail(): Observable<PropertyDetails[]> {
      return this.http.get<PropertyDetails[]>(this.BaseURI +'/Properties');
    }
  // Post a Property
  /*postPropertyDetail(prop) {
    return this.http.post<any>(this.BaseURI +'/Properties',prop); 

  }*/
 
  postPropertyDetail() {
    console.log("this.formData",this.formData);
    console.log("this.formData.Installations",this.formData.Installations);
    let objects = (this.formData.Installations).map((value, index) => {
      return {
        id: index + 1,
        name: value
      };
    })
    console.log(objects);
    this.formData.Installations=objects;
    return this.http.post(this.BaseURI +'/Properties', this.formData); 
  }
  
  // PUT a Property
  putPropertyDetail() {
    return this.http.put(this.BaseURI + '/Properties/'+ this.formData.IdProp, this.formData);
  }
  // Delete a Property
  deletePropertyDetail(id) {
    
    return this.http.delete(this.BaseURI + '/Properties/'+ id);
  }
 


  refreshList(){
    this.http.get(this.BaseURI + '/PropertyDetail')
    .toPromise()
    .then(res => this.list = res as PropertyDetails[]);
  }
  sendMessage(personBody) {
    this.subject.next(personBody)
  }

  clearMessages() {
    this.subject.next()
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable()
  }
  private _listners= new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy:string){
    this._listners.next(filterBy);
  }
}
