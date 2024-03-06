import { Component, Input, ViewChild } from '@angular/core';
import { Absence } from '../../models/absence';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { DatePipe } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';




@Component({
  selector: 'app-absences-child-list',
  standalone: true,
  imports: [MatExpansionModule,MatAccordion,MatButtonModule,DatePipe,MatDividerModule],
  templateUrl: './absences-child-list.component.html',
  styleUrl: './absences-child-list.component.scss'
})
export class AbsencesChildListComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  @Input() absences!: Absence[];
  
}
