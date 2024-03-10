import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  showNavbar : BehaviorSubject<boolean>;
  user!: BehaviorSubject<User>;

  constructor() { 
    this.showNavbar = new BehaviorSubject(true)
  }

  hide():void{
    this.showNavbar.next(false)
  }

  display():void{
    this.showNavbar.next(true)
  }
}
