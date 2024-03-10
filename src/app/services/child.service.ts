import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Child } from '../models/child';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  
  constructor(private http : HttpClient) { }

  getAllChilds():Observable<Child[]>{
    return this.http.get<Child[]>(`${environment.apiUrl}/childs`);
  }

  getChildById(id : number):Observable<Child>{
    return this.http.get<Child>(`${environment.apiUrl}/childs/${id}`)
  }

}