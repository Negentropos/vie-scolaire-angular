import { Component, Input, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-my-profil',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,ReactiveFormsModule,MatInputModule,FormsModule,MatFormFieldModule,MatError,NgIf,AsyncPipe,RolePipe,MatIconModule],
  templateUrl: './my-profil.component.html',
  styleUrl: './my-profil.component.scss'
})
export class MyProfilComponent implements OnInit {
  user$!:Observable<User> | null;
  userForm!:FormGroup;

  emailCtrl!:FormControl;
  tel1Ctrl!:FormControl;
  tel2Ctrl!:FormControl;

  email!:String;
  tel1!:String;
  tel2!:string;

  constructor(private router : Router,
    private userService : UserService,
    private authService : AuthService,
    private formBuilder : FormBuilder){}

  ngOnInit():void{
    this.user$ = this.authService.getUser()
    this.user$?.subscribe(user => {
      this.email = user.email;
      this.tel1 = user.tel1;
      this.tel2 = user.tel2;
    })
    this.initForm();
  }

  initForm():void {
    this.emailCtrl = this.formBuilder.control(this.email,[Validators.required,Validators.email])
    this.tel1Ctrl = this.formBuilder.control(this.tel1)
    this.tel2Ctrl = this.formBuilder.control(this.tel2)
    this.userForm = this.formBuilder.group({
      emailCtrl : this.emailCtrl,
      tel1Ctrl : this.tel1Ctrl,
      tel2Ctrl : this.tel2Ctrl,
    })
  }

  onSubmit():void{

  }

  getErrorEmailMessage() {
    if (this.emailCtrl.hasError('required')) {
      return 'Email requis';
    }
    return this.emailCtrl.hasError('email') ? "Email non valide" : '';
  }


}
