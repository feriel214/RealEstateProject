import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location} from 'src/app/shared/models/location';
import { Subject,Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor( private http:HttpClient) { }
  formData: Location;
  readonly rootURL = 'http://localhost:5000/api';

  form: FormGroup = new FormGroup({
    Id: new FormControl(null),
    Name: new FormControl('', Validators.required),
    Property: new FormControl('', Validators.required),
  })

  //POST Location 
  postLocation(loca :Location) {
    return this.http.post(this.rootURL +'/Locations',loca)
  }

  //PUT Location 
  putLocation(loca :Location) {
    return this.http.put(
      this.rootURL + '/Locations/'+loca.IdLo,loca)
  }
  //DELETE Location 
  deleteLocation(id: number){
    return this.http.delete(this.rootURL +'/Locations/'+id)
  }
  //GET Location 
  getLocation(): Observable<Location[]>{
    return this.http.get<Location[]>(this.rootURL + '/Locations');
  }

 
  private _listners= new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy:string){
    this._listners.next(filterBy);
  }

}
