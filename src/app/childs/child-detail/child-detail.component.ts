import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { Child } from '../../models/child';
import { ChildService } from '../services/child.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog,} from '@angular/material/dialog';
import { ChildParentsContactComponent } from '../child-parents-contact/child-parents-contact.component';
import { User } from '../../models/user';
import { AbsencesChildListComponent } from '../../absences/absences-child-list/absences-child-list.component';
import { AbsenceAddComponent } from '../../absences/absence-add/absence-add.component';
import { ClassNamePipe } from '../../shared/pipes/class-name.pipe';

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
    ],
})
export class ChildDetailComponent implements OnInit {

  child$!:Observable<Child>;

  constructor(
    private childService : ChildService,
    private route : ActivatedRoute,
    private router : Router,
    public dialog: MatDialog){}

  ngOnInit():void{
    const childId = +this.route.snapshot.params['id'];
    this.child$ = this.childService.getChildById(childId);
  }


  onAddNewAbsence(child : Child):void{
    this.dialog.open(AbsenceAddComponent,{
      data : child,
    })
  }

  openParentsInfo(childUsers : User[]):void {
    const dialogRef = this.dialog.open(ChildParentsContactComponent, {
      data: childUsers,
    });

    //TODO voir si ici on peut pas provoquer réactualisation de la page pour voir si nouvelles absences
    //dialogRef.afterClosed().subscribe()
    }

}
