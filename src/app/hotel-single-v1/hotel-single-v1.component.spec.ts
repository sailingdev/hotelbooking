import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSingleV1Component } from './hotel-single-v1.component';

describe('HotelSingleV1Component', () => {
  let component: HotelSingleV1Component;
  let fixture: ComponentFixture<HotelSingleV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSingleV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSingleV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
