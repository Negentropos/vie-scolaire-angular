import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Absence } from '../../models/absence';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http : HttpClient) { }

  getAllChilds():Observable<Absence[]>{
    return this.http.get<Absence[]>(`${environment.apiUrl}/childs`);
  }

  getChildById(id : number):Observable<Absence>{
    return this.http.get<Absence>(`${environment.apiUrl}/childs/${id}`)
  }

  addNewAbsence(absence : Absence):Observable<Absence>{
    return this.http.post<Absence>(`${environment.apiUrl}/absences`,absence)
  }
}
