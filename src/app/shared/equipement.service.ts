import { Injectable } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { EquipementDetail } from './models/equipement-detail'
import { HttpClient } from '@angular/common/http'
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

    formData: EquipementDetail
    readonly rootURL = 'http://localhost:59035/api';
    constructor(private http: HttpClient) {}
  
    form: FormGroup = new FormGroup({
      $key: new FormControl(null),
      Name: new FormControl('', Validators.required),
      Property: new FormControl('', Validators.required),
    })
    
    initializeFormGroup() {
      this.form.setValue({
        $key: null,
        Name: '',
        Property: '',
      })
    }
    
  
     //GET Equipement
     getEquipement(): Observable<EquipementDetail[]>{
      return this.http.get<EquipementDetail[]>(this.rootURL + '/EquipementDetail');
    }
    //POST Equipement
    postEquipement(equip :EquipementDetail) {
      return this.http.post(this.rootURL +'/EquipementDetail',equip)
    }
    //PUT Equipement
    putEquipement(equip :EquipementDetail) {
      return this.http.put(
        this.rootURL + '/EquipementDetail/'+equip.Id,equip,
      )
    }
    //Delete Equipement
    deleteEquipement(id: number){
      return this.http.delete(this.rootURL +'/EquipementDetail/'+id)
    }
    private _listners= new Subject<any>();
    listen():Observable<any>{
      return this._listners.asObservable();
    }
    filter(filterBy:string){
      this._listners.next(filterBy);
    }
    
  
  
}
