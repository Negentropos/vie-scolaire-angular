import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.services';
import { MatCardModule } from '@angular/material/card';
import { RolePipe } from '../../shared/pipes/role.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-my-profil',
  standalone: true,
  imports: [MatListModule,MatButtonModule,MatTooltipModule,RolePipe,MatIconModule,MatDialogModule,MatCardModule],
  templateUrl: './my-profil.component.html',
  styleUrl: './my-profil.component.scss'
})
export class MyProfilComponent {
  user$!:Observable<User>;

  constructor(
    private router : Router,
    private authService : AuthService,
    public dialogRef : MatDialogRef<MyProfilComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User,
    ){}

}
