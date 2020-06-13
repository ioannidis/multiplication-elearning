import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsShowComponent } from './lessons-show.component';

describe('LessonsShowComponent', () => {
  let component: LessonsShowComponent;
  let fixture: ComponentFixture<LessonsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
