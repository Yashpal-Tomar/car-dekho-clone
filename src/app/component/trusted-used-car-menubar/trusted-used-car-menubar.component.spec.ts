import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedUsedCarMenubarComponent } from './trusted-used-car-menubar.component';

describe('TrustedUsedCarMenubarComponent', () => {
  let component: TrustedUsedCarMenubarComponent;
  let fixture: ComponentFixture<TrustedUsedCarMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedUsedCarMenubarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustedUsedCarMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
