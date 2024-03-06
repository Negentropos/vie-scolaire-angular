import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceAddComponent } from './absence-add.component';

describe('AbsenceAddComponent', () => {
  let component: AbsenceAddComponent;
  let fixture: ComponentFixture<AbsenceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsenceAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbsenceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
