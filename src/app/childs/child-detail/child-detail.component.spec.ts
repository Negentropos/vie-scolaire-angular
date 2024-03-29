import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDetailComponent } from './child-detail.component';

describe('ChildDetailComponent', () => {
  let component: ChildDetailComponent;
  let fixture: ComponentFixture<ChildDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
