console.log( "******** listing.component.ts ********" );

import { Component, OnInit } from '@angular/core';
import { BikeService } from "./../bike.service";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  listings_all = {};
  listings_one = {};
  listings_delete_res = {};
  users_one = {};

  constructor(
    private _bikeService: BikeService
  ){}

  ngOnInit() {
    this.listings_get();
  }

  listings_get(){
    let observable = this._bikeService.listings_get();
    observable.subscribe( data => {
      this.listings_all = data;
      console.log( "listings_get in listing.component.ts:", this.listings_all );
    })
  }

  listings_get_one( id ){
    let observable = this._bikeService.listings_get_one( id );
    observable.subscribe( data => {
      this.listings_one = data;
      console.log( "listings_one in listing.component.ts:", this.listings_one );
    })
  }

  listings_delete_one( id ){
    let observable = this._bikeService.listings_delete_one( id );
    observable.subscribe( data => {
      this.listings_delete_res = data;
      console.log( "listings_delete_one in listing.component.ts:", this.listings_delete_res )
      this.listings_get();
    })
  }

  users_get_one( id ){
    let observable = this._bikeService.users_get_one( id );
    observable.subscribe( data => {
      this.users_one = data;
      console.log( "users_one in listing.component.ts:", this.users_one );
      let u: String =  `${this.users_one["users"][0].f_name} ${this.users_one["users"][0].l_name}, ${this.users_one["users"][0].email}`
      alert( u );
    })
  }
}
