import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniReviewComponent } from './mini-review.component';

describe('MiniReviewComponent', () => {
  let component: MiniReviewComponent;
  let fixture: ComponentFixture<MiniReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
