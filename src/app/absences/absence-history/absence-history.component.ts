import { Component, Inject, OnInit } from '@angular/core';
import { Child } from '../../models/child';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ClassNamePipe } from '../../shared/pipes/class-name.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AbsencesChildListComponent } from '../absences-child-list/absences-child-list.component';

@Component({
  selector: 'app-absence-history',
  standalone: true,
  imports: [MatDialogModule,ClassNamePipe,MatButtonModule,MatIconModule,AbsencesChildListComponent],
  templateUrl: './absence-history.component.html',
  styleUrl: './absence-history.component.scss'
})
export class AbsenceHistoryComponent {

  constructor(
    public dialogRef : MatDialogRef<AbsenceHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public child: Child,
      ) {} 

}
