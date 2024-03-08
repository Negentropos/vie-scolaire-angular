import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChildDetailComponent } from './my-child-detail.component';

describe('MyChildDetailComponent', () => {
  let component: MyChildDetailComponent;
  let fixture: ComponentFixture<MyChildDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyChildDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyChildDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
