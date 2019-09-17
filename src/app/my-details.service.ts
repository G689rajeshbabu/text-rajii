import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MydetailsTest } from './myDetails';

@Injectable({
  providedIn: 'root'
})
export class MyDetailsService {

  constructor(private _http:HttpClient) { }
  getMyDetails():Observable<MydetailsTest[]>{
    const url="../assets/data/mydetails.json";
    return this._http.get<MydetailsTest[]>(url);
  };
}

