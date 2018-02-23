console.log( "******** app.module.ts ******** " );

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { BikeService } from "./bike.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { HeaderComponent } from './header/header.component';
import { ListingComponent } from './listing/listing.component';
import { ListingEditComponent } from './listing-edit/listing-edit.component';
import { ListingNewComponent } from './listing-new/listing-new.component';
import { MyListingsComponent } from './my-listings/my-listings.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListingComponent,
    ListingEditComponent,
    ListingNewComponent,
    MyListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BikeService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
