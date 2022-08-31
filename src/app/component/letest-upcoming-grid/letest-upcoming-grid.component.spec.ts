import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetestUpcomingGridComponent } from './letest-upcoming-grid.component';

describe('LetestUpcomingGridComponent', () => {
  let component: LetestUpcomingGridComponent;
  let fixture: ComponentFixture<LetestUpcomingGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetestUpcomingGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetestUpcomingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
