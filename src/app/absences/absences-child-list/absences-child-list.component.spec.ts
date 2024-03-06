import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsencesChildListComponent } from './absences-child-list.component';

describe('AbsencesChildListComponent', () => {
  let component: AbsencesChildListComponent;
  let fixture: ComponentFixture<AbsencesChildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsencesChildListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbsencesChildListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
