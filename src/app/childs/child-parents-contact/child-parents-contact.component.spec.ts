import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildParentsContactComponent } from './child-parents-contact.component';

describe('ChildParentsContactComponent', () => {
  let component: ChildParentsContactComponent;
  let fixture: ComponentFixture<ChildParentsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildParentsContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildParentsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
