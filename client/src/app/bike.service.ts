console.log( "******** bike.service.ts ********" );

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BikeService {

  service_num = 1234;
  logged_in_user_id = "5a8e13a9e8199c432ee985de";

  constructor( private _bike: HttpClient ) {}

  listings_get(){
    return this._bike.get( "listings" );
  }

  listings_get_by_user( user_id ){
    return this._bike.get( `/users/${user_id}/listings` )
  }
  
  listings_get_one( id ){
    return this._bike.get( `/listings/${id}`)
  }

  listings_create( user_id, new_listing ){
    return this._bike.post( `/users/${user_id}/listings`, new_listing )
  }

  listings_update( id, updated_listing ){
    return this._bike.put( `/listings/${id}`, updated_listing );
  }

  listings_delete_one( id ){
    return this._bike.delete( `/listings/${id}`)
  }

  users_get_one( id ){
    return this._bike.get( `/users/${id}`)
  }
}
