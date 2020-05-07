import { Injectable } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Subject,Observable } from 'rxjs';
import { Installation } from './models/installation'
@Injectable({
  providedIn: 'root'
})
export class InstallationService {

  formData: Installation
  readonly rootURL = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

    form: FormGroup = new FormGroup({
    Id: new FormControl(null),
    Name: new FormControl('', Validators.required)
  })
  
  
  /*
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      Name: '',
      Property: '',
    })
  } */
  

   //GET Installation
   getInstallation(): Observable<Installation[]>{
    return this.http.get<Installation[]>(this.rootURL + '/Installations');
  }
  //POST Installation
  postInstallation(instal :Installation) {
    return this.http.post(this.rootURL +'/Installations',instal)
  }
  //PUT Installation
  putInstallation(instal :Installation) {
    return this.http.put(
      this.rootURL + '/Installations/'+instal.IdIns,instal,
    )
  }
  //Delete Installation
  deleteInstallation(id: number){
    return this.http.delete(this.rootURL +'/Installations/'+id)
  }
  
  private _listners= new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy:string){
    this._listners.next(filterBy);
  }

}
