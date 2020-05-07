import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Rules } from './models/rules'
import { HttpClient } from '@angular/common/http'
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  formData: Rules
  readonly rootURL = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

    form: FormGroup = new FormGroup({
    Id: new FormControl(null),
    Name: new FormControl('', Validators.required),
    Property: new FormControl('', Validators.required),
  })
  //GET Rules
  getRules(): Observable<Rules[]>{
    return this.http.get<Rules[]>(this.rootURL + '/Rules');
  }
  //POST Rules
  postRules(rules :Rules) {
    return this.http.post(this.rootURL +'/Rules',rules)
  }
  //PUT Rules
  putRules(rules :Rules) {
    return this.http.put(
      this.rootURL + '/Rules/'+rules.Id,rules,
    )
  }
  //Delete Rules
  deleteRules(id: number){
    return this.http.delete(this.rootURL +'/Rules/'+id)
  }
  
  private _listners= new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy:string){
    this._listners.next(filterBy);
  }

}
