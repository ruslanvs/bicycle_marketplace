import { Component, OnInit } from '@angular/core';
import { BikeService } from "./../bike.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged_in_user_name: string;
  logged_in_user_city: string;

  constructor(
    private _bikeService: BikeService
  ){}

  ngOnInit() {
    this.users_get_one( this._bikeService.logged_in_user_id )
  }

  users_get_one( id ){
    let observable = this._bikeService.users_get_one( id )
    observable.subscribe( data => {
      this.logged_in_user_name = data["users"][0].f_name
      this.logged_in_user_city = data["users"][0].city
    })
    
  }

}
