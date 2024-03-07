import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.services';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, NgIf } from '@angular/common';
import { RolePipe } from '../../shared/pipes/role.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-my-profil',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatButtonModule,MatTooltipModule,NgIf,AsyncPipe,RolePipe,MatIconModule],
  templateUrl: './my-profil.component.html',
  styleUrl: './my-profil.component.scss'
})
export class MyProfilComponent implements OnInit {
  user$!:Observable<User>;

  constructor(
    private router : Router,
    private authService : AuthService,
    ){}
  

  ngOnInit():void{
    let userId = this.authService.getUserId()
    this.user$ = this.authService.getUser(userId)
  }

}
