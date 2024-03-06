import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private userService : UserService,
    private router : Router){}

  login(name: string, password: string): boolean {
    const isLoggedIn = (name == 'clement' && password == '123')  ;
    if (isLoggedIn){
      localStorage.setItem("access_token","falseToken");
      localStorage.setItem("userId","8");
      return true;
    } else {
      return false;
    }
      
  }

  isLogged():boolean{
    let authToken = localStorage.getItem('access_token')
    return authToken !== null ? true : false;
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('userId');
    this.router.navigateByUrl('/login');
  }

  getToken():string | null{
    return localStorage.getItem('access_token');
  }

  getUser():Observable<User> | null {
      const number = localStorage.getItem('userId')
      if (number){
        return this.userService.getUserById(parseInt(number))
      }
      else {
      return null
    }
  }
}