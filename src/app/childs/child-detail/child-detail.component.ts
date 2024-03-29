import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { Child } from '../../models/child';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog,} from '@angular/material/dialog';
import { ChildParentsContactComponent } from '../child-parents-contact/child-parents-contact.component';
import { AbsencesChildListComponent } from '../../absences/absences-child-list/absences-child-list.component';
import { AbsenceAddComponent } from '../../absences/absence-add/absence-add.component';
import { ClassNamePipe } from '../../shared/pipes/class-name.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { User } from '../../models/user';
import { ChildService } from '../../services/child.service';
import { AuthService } from '../../services/auth.services';

@Component({
    selector: 'app-child-detail',
    templateUrl: './child-detail.component.html',
    styleUrl: './child-detail.component.scss',
    standalone: true,
    imports: [
        NgIf,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        NgFor,
        AsyncPipe,
        AbsencesChildListComponent,
        ClassNamePipe,
        MatTooltipModule,
    ],
})
export class ChildDetailComponent implements OnInit {

  child$!:Observable<Child>;
  user$!:Observable<User>;

  constructor(
    private childService : ChildService,
    private route : ActivatedRoute,
    private authService : AuthService,
    public dialog: MatDialog){}

  ngOnInit():void{
    const childId = +this.route.snapshot.params['id'];
    this.child$ = this.childService.getChildById(childId);
    this.user$ = this.authService.getUser(this.authService.getUserId())
  }


  onAddNewAbsence(currentChild : Child,currentUser : User):void{
    this.dialog.open(AbsenceAddComponent,{
      data : {
        child : currentChild,
        user : currentUser
      },
    })
  }

  openParentsInfo(childUsersId : number[]):void {
    const dialogRef = this.dialog.open(ChildParentsContactComponent, {
      data: childUsersId,
    });

    //TODO voir si ici on peut pas provoquer réactualisation de la page pour voir si nouvelles absences
    //dialogRef.afterClosed().subscribe()
    }

}
