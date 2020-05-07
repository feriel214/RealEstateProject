import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Categories } from './models/categories'
import { HttpClient } from '@angular/common/http';
import { Subject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  formData: Categories
  readonly rootURL = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

    form: FormGroup = new FormGroup({
    Id: new FormControl(null),
    Name: new FormControl('', Validators.required)
    //Status: new FormControl('', Validators.required),
  })
  
  //GET Category
  getCategory(): Observable<Categories[]>{
    return this.http.get<Categories[]>(this.rootURL + '/Category');
  }
  //POST Category
  postCategory(instal :Categories) {
    return this.http.post(this.rootURL +'/Category',instal)
  }
  //PUT Category
  putCategory(instal :Categories) {
    return this.http.put(
      this.rootURL + '/Category/'+instal.IdCa,instal,
    )
  }
  //Delete Category
  deleteCategory(id: number){
    return this.http.delete(this.rootURL +'/Category/'+id)
  }
  
  private _listners= new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy:string){
    this._listners.next(filterBy);
  }
}
