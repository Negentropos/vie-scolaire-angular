import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { AsyncPipe, NgIf } from '@angular/common';
import { MyChildDetailComponent } from '../my-child-detail/my-child-detail.component';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-my-childs-list',
  standalone: true,
  imports: [MyChildDetailComponent,NgIf,AsyncPipe],
  templateUrl: './my-childs-list.component.html',
  styleUrl: './my-childs-list.component.scss'
})
export class MyChildsListComponent implements OnInit {

  user$!:Observable<User>;

  constructor(
    private authService : AuthService,
  ){}
  
  ngOnInit(): void {
    const userId = this.authService.getUserId();
    this.user$ = this.authService.getUser(userId);
  }

}
