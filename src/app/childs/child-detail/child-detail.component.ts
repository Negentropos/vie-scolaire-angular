import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { Child } from '../../models/child';
import { ChildService } from '../../core/services/child.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog,} from '@angular/material/dialog';
import { ChildParentsContactComponent } from '../child-parents-contact/child-parents-contact.component';
import { User } from '../../models/user';
import { AbsencesChildListComponent } from '../../absences/absences-child-list/absences-child-list.component';
import { AbsenceAddComponent } from '../../absences/absence-add/absence-add.component';
import { ClassNamePipe } from '../../shared/pipes/class-name.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserService } from '../../core/services/user.service';
import { Absence } from '../../models/absence';
import { ClassSchool } from '../../models/class-school';
import { AbsenceService } from '../../core/services/absence.service';
import { ClassSchoolService } from '../../core/services/class-school.service';

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

  child!:Child;
  childUsers!:User[];
  childAbsences!:Absence[];


  constructor(
    private childService : ChildService,
    private route : ActivatedRoute,
    private router : Router,
    private absenceService : AbsenceService,
    private classSchoolService : ClassSchoolService,
    private userService : UserService,
    public dialog: MatDialog){}

  ngOnInit():void{
    const childId = +this.route.snapshot.params['id'];
    this.childService.getChildById(childId).pipe(take(1)).subscribe(child => this.child=child);
    this.child.absences.forEach((absenceId) =>  this.absenceService.getAbsenceById(absenceId).pipe(take(1)).subscribe(absence => this.childAbsences.push(absence)))
  }


  onAddNewAbsence(child : Child):void{
    this.dialog.open(AbsenceAddComponent,{
      data : child,
    })
  }

  openParentsInfo(childUsers : number[]):void {
    childUsers.forEach((userId)=> this.userService.getUserById(userId).pipe(take(1)).subscribe(user => this.childUsers.push(user)))
    const dialogRef = this.dialog.open(ChildParentsContactComponent, {
      data: this.childUsers,
    });

    //TODO voir si ici on peut pas provoquer réactualisation de la page pour voir si nouvelles absences
    //dialogRef.afterClosed().subscribe()
    }

}
