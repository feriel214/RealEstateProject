import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Subject,Observable } from 'rxjs';
import { Bed } from 'src/app/shared/models/bed';

@Injectable({
  providedIn: 'root'
})
export class BedService {
  formData: Bed
  readonly rootURL = 'http://localhost:5000/api';
  constructor(private http: HttpClient) {}
    form: FormGroup = new FormGroup({
    Id: new FormControl(null),
    RoomNumber:new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
    Property: new FormControl('', Validators.required),
  })
   //GET Bed
   getBed(): Observable<Bed[]>{
    return this.http.get<Bed[]>(this.rootURL + '/Beds');
  }
  //POST Bed
  postBed(bed :Bed) {
    return this.http.post(this.rootURL +'/Beds',bed)
  }
  //PUT Bed
  putBed(bed :Bed) {
    return this.http.put(
      this.rootURL + '/Beds/'+bed.IdBe,bed,
    )
  }
  //Delete Bed
  deleteBed(id: number){
    return this.http.delete(this.rootURL +'/Beds/'+id)
  }
  
  private _listners= new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy:string){
    this._listners.next(filterBy);
  }

}
