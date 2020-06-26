import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpStudentComponent } from './help-student.component';

describe('HelpStudentComponent', () => {
  let component: HelpStudentComponent;
  let fixture: ComponentFixture<HelpStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
