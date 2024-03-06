import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { User } from '../../models/user';
import { NgFor, NgPlural } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { PluralizePipe } from '../../shared/pipes/pluralize.pipe';

@Component({
  selector: 'app-child-parents-contact',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, NgFor,NgPlural,MatDividerModule,PluralizePipe],
  templateUrl: './child-parents-contact.component.html',
  styleUrl: './child-parents-contact.component.scss'
})
export class ChildParentsContactComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public users: User[]) {} 
}
