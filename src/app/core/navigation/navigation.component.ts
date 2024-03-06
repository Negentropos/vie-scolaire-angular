import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router';
import { MatListItem } from '@angular/material/list';
import { AuthService } from '../services/auth.services';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable, Subscription, async } from 'rxjs';
import { User } from '../../models/user';
import { NavbarService } from '../services/navbar.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
    standalone: true,
    imports: [
        MatToolbar,
        MatIconButton,
        MatMenuTrigger,
        MatIcon,
        MatMenu,
        MatMenuItem,
        MatListItem,
        RouterLink,
        NgIf,
        AsyncPipe,
    ],
})
export class NavigationComponent implements OnInit, OnDestroy {

  //hide or show navigation bar
  showNavbar : boolean = true;
  subscription$ : Subscription;
  userRole: string = "parent";

  user$!:Observable<User>;

  constructor(
    private router:Router,
    private navbarService : NavbarService,
    private authService : AuthService){
      this.subscription$ = this.navbarService.showNavbar.subscribe((value)=>{
        this.showNavbar = value;
      })
    }

  ngOnInit():void{
    //let userId  = this.authService.getUserId();
    //this.user$ = this.authService.getUser(userId);
    //this.user$.subscribe((user)=>this.userRole = user.role.name);
  }

  logOut() {
    this.authService.logout()
    }

  onMyProfilClick() {
    this.router.navigateByUrl('profil')
  }

  ngOnDestroy():void{
    this.subscription$.unsubscribe()
  }
  
}

