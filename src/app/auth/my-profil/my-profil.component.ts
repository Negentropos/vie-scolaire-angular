import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.services';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe, NgIf } from '@angular/common';
import { RolePipe } from '../../shared/pipes/role.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-my-profil',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatTooltipModule, ReactiveFormsModule,MatInputModule,FormsModule,MatFormFieldModule,MatError,NgIf,AsyncPipe,RolePipe,MatIconModule],
  templateUrl: './my-profil.component.html',
  styleUrl: './my-profil.component.scss'
})
export class MyProfilComponent implements OnInit {
  user$!:Observable<User>;
  userForm!:FormGroup;

  constructor(
    private router : Router,
    private authService : AuthService,
    private formBuilder : FormBuilder
    ){}
  

  ngOnInit():void{
    let userId = this.authService.getUserId()
    this.user$ = this.authService.getUser(userId)
    this.initForm();
  }

  initForm():void {

    this.userForm = this.formBuilder.group({
      emailCtrl : ['',[Validators.required,Validators.email]],
      tel1Ctrl : [''],
      tel2Ctrl : [''],
    })
  }

  onSubmit():void{

  }

  getErrorEmailMessage() {
    if (this.userForm.value.emailCtrl.hasError('required')) {
      return 'Email requis';
    }
    return this.userForm.value.emailCtrl.hasError('email') ? "Email non valide" : '';
  }


}
