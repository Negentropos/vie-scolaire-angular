import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Child } from '../../models/child';
import { environment } from '../../../environments/environment.prod';

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

  addAbsenceToChild(absenceId : number, child : Child):Observable<Child>{
    child.absences.push(absenceId);
    return this.http.put<Child>(`${environment.apiUrl}/childs/${child.id}`,child)
  }
}