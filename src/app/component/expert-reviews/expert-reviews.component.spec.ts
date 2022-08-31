import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertReviewsComponent } from './expert-reviews.component';

describe('ExpertReviewsComponent', () => {
  let component: ExpertReviewsComponent;
  let fixture: ComponentFixture<ExpertReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
