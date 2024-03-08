import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private userService : UserService,
    private router : Router,
    private localStorage : LocalStorageService){}

  login(name: string, password: string): boolean {
    const isLoggedIn = (name == 'clement' && password == '123')  ;
    if (isLoggedIn){
      this.localStorage.store("access_token","falseToken");
      this.localStorage.store("userId",9);
      this.localStorage.store("userRole","parent")
      return true;
    } else {
      return false;
    }
      
  }

  isLogged():boolean{
    let authToken = this.localStorage.retrieve('access_token')
    return authToken !== null ? true : false;
  }

  logout() {
    this.localStorage.clear('access_token');
    this.localStorage.clear('userId');
    this.localStorage.clear('userRole');
    this.router.navigateByUrl('/login');
  }

  getToken():string | null{
    return this.localStorage.retrieve('access_token');
  }

  getUser(userId : number):Observable<User> {
      return this.userService.getUserById(userId);
  }

  getRole():string{
    return this.localStorage.retrieve('userRole')
  }

  getUserId():number{
    return this.localStorage.retrieve('userId')
  }
}