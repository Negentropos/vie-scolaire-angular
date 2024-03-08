import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChildsListComponent } from './my-childs-list.component';

describe('MyChildsListComponent', () => {
  let component: MyChildsListComponent;
  let fixture: ComponentFixture<MyChildsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyChildsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyChildsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
