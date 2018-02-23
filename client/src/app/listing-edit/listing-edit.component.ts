console.log( "******** listing-edit.component.ts ********" );

import { Component, OnInit } from '@angular/core';
import { BikeService } from "./../bike.service";

@Component({
  selector: 'app-listing-edit',
  templateUrl: './listing-edit.component.html',
  styleUrls: ['./listing-edit.component.css']
})
export class ListingEditComponent implements OnInit {

  num: number;
  listings_by_user: any;

  constructor(
    private _bikeService: BikeService
  ){}
  
  ngOnInit() {
    this.listings_by_user = {};
    
    this.num = this._bikeService.service_num; //VAR STORED ON THE SERVICE
    this.listings_get_by_user( this._bikeService.logged_in_user_id )
  }

  listings_get_by_user( user_id ){
    let observable = this._bikeService.listings_get_by_user( user_id );
    observable.subscribe( data => {
      this.listings_by_user = data;
      console.log( "listings_get_by_user in listing-edit.compontnent.ts:", data );
    })

  }

  listings_update( form_data ){
    let observable = this._bikeService.listings_update( form_data._id, form_data );
    console.log( "id in listing-edit.component.ts:", form_data._id );
    console.log( "updated_listing in listing-edit.component.ts:", form_data );
    observable.subscribe( data => {
      console.log( "listings_update in listing-edit.compontnent.ts:", data );
    })
  }
  // listings_update( id ){
  //   let observable = this._bikeService.listings_update( id, this.updated_listing );
  //   console.log( "id in listing-edit.component.ts:", id );
  //   console.log( "updated_listing in listing-edit.component.ts:", this.updated_listing );
  //   observable.subscribe( data => {
  //     console.log( "listings_update in listing-edit.compontnent.ts:", data );
  //   })
  // }
  // RESET FORM FIELDS HERE IF NECESSARY
}
