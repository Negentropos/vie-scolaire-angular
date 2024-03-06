import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassSchool } from '../../models/class-school';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClassSchoolService {

  constructor(private http : HttpClient) { }

  getAllClassSchools():Observable<ClassSchool[]>{
    return this.http.get<ClassSchool[]>(`${environment.apiUrl}/classSchools`);
  }

  getClassSchooldById(id : number):Observable<ClassSchool>{
    return this.http.get<ClassSchool>(`${environment.apiUrl}/classSchools/${id}`)
  }
}
