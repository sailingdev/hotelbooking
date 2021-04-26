import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {
  public showStyle = 'v1';
  constructor(protected route: ActivatedRoute,) { 
    var id = parseInt(this.route.snapshot.paramMap.get('id'));
    if(id == 1){ 
      this.showStyle = 'v1';
    }else if(id == 2){ 
      this.showStyle = 'v2';
    }else if(id == 3){ 
      this.showStyle = 'v3';
    }

    
  }

  ngOnInit(): void {

  }

}
