import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelListWithMapComponent } from './hotel-list-with-map/hotel-list-with-map.component';

const routes: Routes = [
  {path: '',component: HomeComponent, data: {preload: true}},
  {path: 'home',component: HomeComponent},
  {path: 'search',component: HotelListComponent,},
  {path: 'listwithmap',component: HotelListWithMapComponent,},
  {path: 'booking',component: HotelBookingComponent,},
  {path: 'hotel/:id', component: HotelDetailComponent},

  {path: '**', redirectTo: ''},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
