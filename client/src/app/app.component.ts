console.log( "******** app.component.ts ********" );

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { BikeService } from "./bike.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'we are here';

  constructor(
    private _bikeService: BikeService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){}

  doHome(){
    this._router.navigate( ["/home"] );
  }

}
