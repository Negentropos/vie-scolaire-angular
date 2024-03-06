import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http : HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getUserById(id : number ):Observable<User>{
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`)
  }
}