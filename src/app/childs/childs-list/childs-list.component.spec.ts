import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildsListComponent } from './childs-list.component';

describe('ChildsListComponent', () => {
  let component: ChildsListComponent;
  let fixture: ComponentFixture<ChildsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
