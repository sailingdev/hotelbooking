import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSingleV3Component } from './hotel-single-v3.component';

describe('HotelSingleV3Component', () => {
  let component: HotelSingleV3Component;
  let fixture: ComponentFixture<HotelSingleV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSingleV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSingleV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
