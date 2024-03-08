import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.services';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NavbarService } from '../../core/services/navbar.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {

  name!: string;
  password!: string;
  message!:string;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private navbarService : NavbarService,
  ) { }

  ngOnDestroy(): void {
    this.navbarService.display()
  }

  ngOnInit() {
    this.navbarService.hide();
    this.message=''
  }

  login() {
    let log = this.authService.login(this.name, this.password)
    let role = this.authService.getRole()
    if (log){
      switch (role) {
        case "parent":
          this.router.navigateByUrl('childs/myChilds');
          break;
        default:
          this.router.navigateByUrl('childs')
      } 
    }
    else {
      this.message='Identifiant ou mot de passe invalide.'
    }
  }

  logout() {
    this.authService.logout();
  }
  
}
