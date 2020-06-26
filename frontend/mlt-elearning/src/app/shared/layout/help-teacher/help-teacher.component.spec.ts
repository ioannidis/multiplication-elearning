import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpTeacherComponent } from './help-teacher.component';

describe('HelpTeacherComponent', () => {
  let component: HelpTeacherComponent;
  let fixture: ComponentFixture<HelpTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
