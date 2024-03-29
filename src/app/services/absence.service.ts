import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Absence } from '../models/absence';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http : HttpClient) { }

  getAllAbsences():Observable<Absence[]>{
    return this.http.get<Absence[]>(`${environment.apiUrl}/absences`);
  }

  getAbsenceById(id : number):Observable<Absence>{
    return this.http.get<Absence>(`${environment.apiUrl}/absences/${id}`)
  }

  addNewAbsence(absence : Absence):Observable<Absence>{
    return this.http.post<Absence>(`${environment.apiUrl}/absences`,absence)
  }

  getAbsenceByChildId(childId : number):Observable<Absence[]>{
    return this.http.get<Absence[]>(`${environment.apiUrl}/absences?childId=${childId}`);
  }
}
