import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Child } from '../../models/child';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AbsencesChildListComponent } from '../../absences/absences-child-list/absences-child-list.component';
import { ClassNamePipe } from '../../shared/pipes/class-name.pipe';
import { AsyncPipe, NgIf } from '@angular/common';
import { AbsenceAddComponent } from '../../absences/absence-add/absence-add.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AbsenceHistoryComponent } from '../../absences/absence-history/absence-history.component';
import { User } from '../../models/user';
import { ChildService } from '../../services/child.service';

@Component({
  selector: 'app-my-child-detail',
  standalone: true,
  imports: [MatIconModule,MatCardModule,MatButtonModule,MatTooltipModule,AbsencesChildListComponent,ClassNamePipe,NgIf,AsyncPipe,AbsenceAddComponent],
  templateUrl: './my-child-detail.component.html',
  styleUrl: './my-child-detail.component.scss'
})
export class MyChildDetailComponent implements OnInit {

  
  @Input() childId! : number;
  @Input() user! : User;

  myChild$!: Observable<Child>;

  constructor(
    private childService : ChildService,
    public dialog: MatDialog,
  ){}

  ngOnInit(): void {
    this.myChild$ = this.childService.getChildById(this.childId);
  }

  onAddNewAbsence(currentChild : Child,currentUser : User):void{
    this.dialog.open(AbsenceAddComponent,{
      data : {
        child : currentChild,
        user : currentUser
      },
    })
  }

  onViewAbsenceHistory(child : Child):void{
    this.dialog.open(AbsenceHistoryComponent,{
      data : child,
    })
  }

  lastAbsences(absencesId : number[]):number[]{
    return absencesId.slice(-3);
  }

}
