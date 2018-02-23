console.log( "******** listing-new.component.ts ********" );

import { Component, OnInit } from '@angular/core';
import { BikeService } from "./../bike.service";
// import { ListingEditComponent } from "./../listing-edit/listing-edit.component";

@Component({
  selector: 'app-listing-new',
  templateUrl: './listing-new.component.html',
  styleUrls: ['./listing-new.component.css']
})
export class ListingNewComponent implements OnInit {

  user_id: String;
  new_listing = {};
  listings_create_res = {};

  // l_user_id: String;

  constructor(
    private _bikeService: BikeService,
    // private _listingEditComponent: ListingEditComponent
  ){}

  ngOnInit() {
    // this.l_user_id = this._bikeService.logged_in_user_id;
  }

  listings_create(){
    this.user_id = this._bikeService.logged_in_user_id;
    let observable = this._bikeService.listings_create( this.user_id, this.new_listing )
    observable.subscribe( data => {
      this.listings_create_res = data
      console.log( "listings_create in listing-new.component.ts:", this.listings_create_res)
    })
    this.new_listing = {
      title: "",
      desc: "",
      price: ""
    }
    // this._listingEditComponent.listings_get_by_user( this.l_user_id );
  }

}
