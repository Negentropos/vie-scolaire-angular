import { Component, Inject, OnInit } from '@angular/core';
import { Child } from '../../models/child';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ClassNamePipe } from '../../shared/pipes/class-name.pipe';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, map, startWith, tap } from 'rxjs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatCardModule } from '@angular/material/card';
import { AbsenceService } from '../services/absence.service';
import { Router } from '@angular/router';
import { Absence } from '../../models/absence';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatTooltipModule } from '@angular/material/tooltip';



@Component({
  selector: 'app-absence-add',
  standalone: true,
  imports: [MatButtonModule,
          MatFormFieldModule,
          MatDialogModule,
          ClassNamePipe,
          MatStepperModule,
          MatDatepickerModule,
          MatRadioModule,
          MatIconModule,
          MatInputModule,
          MatMomentDateModule,
          NgIf,
          AsyncPipe,
          MatCheckboxModule,
          ReactiveFormsModule,
          MatCardModule,
          MatTooltipModule,
          DatePipe,
          ],
  templateUrl: './absence-add.component.html',
  styleUrl: './absence-add.component.scss',
  providers : [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    }
  ]
})
export class AbsenceAddComponent implements OnInit {
  constructor(
    public dialogRef : MatDialogRef<AbsenceAddComponent>,
    @Inject(MAT_DIALOG_DATA) public child: Child,
      private formBuilder : FormBuilder,
      private absenceService : AbsenceService,
      private router : Router,
      ) {} 

  minDate!: Date;

  //Form group final qui va regrouper les différents formGroup & formControls
  absenceFormGroup!: FormGroup;

  dateFormGroup!:FormGroup;
  descriptionFormGroup!:FormGroup;

  desinscriptionFormGroup = this.formBuilder.group({
    canteenCtrl : false,
    nurseryCtrl : false,
    afterSchoolCtrl : false,
  });

  startDateCtrl!:FormControl;
  endDateCtrl!:FormControl;
  severalDaysCtrl!:FormControl;
  specifiedHoursCtrl!:FormControl;
  
  showEndDate$!:Observable<boolean>;
  showTimes$!:Observable<boolean>;

  private initFormsControl():void{
    this.startDateCtrl = this.formBuilder.control('',Validators.required);
    //TODO ici checker tuto pour addValidators
    this.endDateCtrl = this.formBuilder.control('');
    this.severalDaysCtrl = this.formBuilder.control('oneDay');
    this.specifiedHoursCtrl = this.formBuilder.control('fullDay');
    this.dateFormGroup = this.formBuilder.group({
      startDate : this.startDateCtrl,
      endDate : this.endDateCtrl,
      severalDays : this.severalDaysCtrl,
      specifiedHours : this.specifiedHoursCtrl,
      startTime : ['08:10'],
      endTime : ['17:00']
    });
    this.descriptionFormGroup = this.formBuilder.group({
      descriptionCtrl : ['',Validators.required]
    });
    }
  
  private initMainForm(): void {
    this.absenceFormGroup = this.formBuilder.group({
      dateForm : this.dateFormGroup,
      desinscriptionForm : this.desinscriptionFormGroup,
      descriptionForm : this.descriptionFormGroup,
    })
  }

  private initFormObservables():void{
    this.showEndDate$ = this.severalDaysCtrl.valueChanges.pipe(
      startWith(this.severalDaysCtrl.value),
      map(severalDays => severalDays != 'oneDay' ),
      tap(/* ici ajouter Validator sur endDate (doit exister et être inférieure à startDate*/)
    );
    this.showTimes$ = this.specifiedHoursCtrl.valueChanges.pipe(
      startWith(this.specifiedHoursCtrl.value),
      map(specifiedHours => specifiedHours != 'fullDay'),
      tap(/* ajouter validator pour vérifier que un horaire pas supérieur à l'autre*/)
    );
  }


  //Filtre pour exclure Samedi et Dimanche de la sélection de dates
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  ngOnInit():void{
    this.minDate = new Date();
    this.initFormsControl();
    this.initMainForm();
    this.initFormObservables();
  }

  onSubmitForm() {
    if (this.dateFormGroup.value.severalDays === 'oneDay' ){
      this.absenceService
      .addNewAbsence(this.convertFormToAbsence(this.dateFormGroup.value.startDate))
      .pipe(tap(() => this.closeDialog()))
      .subscribe();
    } else {
      let numberOfDays = Math.round((this.dateFormGroup.value.endDate - this.dateFormGroup.value.startDate)/(1000*3600*24)) + 1;
      for (let i = 0; i < numberOfDays;i++){
        this.absenceService
        .addNewAbsence(this.convertFormToAbsence(this.addDays(this.dateFormGroup.value.startDate,i)))
        .pipe(tap(() => this.closeDialog()))
        .subscribe();
      }
    }
    }

    convertFormToAbsence(insertDate : Date):Absence{
      return {
        date : insertDate,
        startTime : this.dateFormGroup.value.startTime,
        endTime : this.dateFormGroup.value.endTime,
        declarationDate : new Date(),
        description : this.descriptionFormGroup.value.descriptionCtrl,
        canteen : this.checkCanteen(),
        allDay : this.dateFormGroup.value.specifiedHours === 'oneDay' ? true : false,
        nursery : this.desinscriptionFormGroup.value.nurseryCtrl ? true : false ,
        afterSchool : this.desinscriptionFormGroup.value.afterSchoolCtrl ? true : false ,
        childId : this.child.id,
      }
    }

  public closeDialog():void{
    this.dialogRef.close();
  }

  private addDays(date: Date, days: number): Date {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  private checkCanteen():boolean{
    // TODO checker la validité de cette fonction...
    const currentTime = new Date()
    return ((this.dateFormGroup.value.startDate.day() === currentTime.getDate()) && (currentTime.getHours() > 9)) ? false : true;
  }
}
