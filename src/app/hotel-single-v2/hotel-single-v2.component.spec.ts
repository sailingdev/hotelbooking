import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSingleV2Component } from './hotel-single-v2.component';

describe('HotelSingleV2Component', () => {
  let component: HotelSingleV2Component;
  let fixture: ComponentFixture<HotelSingleV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSingleV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSingleV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
