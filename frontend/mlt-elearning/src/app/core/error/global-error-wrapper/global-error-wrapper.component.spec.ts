import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalErrorWrapperComponent } from './global-error-wrapper.component';

describe('GlobalErrorWrapperComponent', () => {
  let component: GlobalErrorWrapperComponent;
  let fixture: ComponentFixture<GlobalErrorWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalErrorWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalErrorWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
