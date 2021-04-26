import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelListWithMapComponent } from './hotel-list-with-map.component';

describe('HotelListWithMapComponent', () => {
  let component: HotelListWithMapComponent;
  let fixture: ComponentFixture<HotelListWithMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelListWithMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelListWithMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
