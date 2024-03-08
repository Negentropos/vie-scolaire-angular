import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Absence } from '../../models/absence';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { AbsenceService } from '../../core/services/absence.service';
import { Observable } from 'rxjs';
import { ShortAbsenceDescriptionPipe } from '../../shared/pipes/short-absence-description.pipe';
import { AbsenceTimePipe } from '../../shared/pipes/absence-time.pipe';




@Component({
  selector: 'app-absences-child-list',
  standalone: true,
  imports: [MatExpansionModule,MatAccordion,NgIf,AsyncPipe,MatButtonModule,DatePipe,MatDividerModule,AbsenceTimePipe],
  templateUrl: './absences-child-list.component.html',
  styleUrl: './absences-child-list.component.scss'
})
export class AbsencesChildListComponent implements OnInit{
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  @Input() absencesId!: number[];
  absencesList:Observable<Absence>[] = new Array();

  constructor(private absenceService : AbsenceService){}

  ngOnInit(): void {
    this.absencesId.forEach((absenceId) => this.absencesList.push(this.absenceService.getAbsenceById(absenceId)))
  }




  
}
