import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { User } from '../../models/user';
import { AsyncPipe, NgFor, NgIf, NgPlural } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { PluralizePipe } from '../../shared/pipes/pluralize.pipe';
import { UserService } from '../../core/services/user.service';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-child-parents-contact',
  standalone: true,
  imports: [MatDialogTitle,MatListModule, MatIconModule, MatDialogContent,MatCardModule, AsyncPipe, NgFor,NgPlural,MatDividerModule,PluralizePipe,NgIf],
  templateUrl: './child-parents-contact.component.html',
  styleUrl: './child-parents-contact.component.scss'
})
export class ChildParentsContactComponent implements OnInit{

  usersList : Observable<User>[] = new Array();

  constructor(
    @Inject(MAT_DIALOG_DATA) public usersId: number[],
    private userService : UserService,
    ) {} 
  
  ngOnInit(): void {
    this.usersId.forEach((userId)=>this.usersList.push(this.userService.getUserById(userId)))
  }
}
