import { HeaderComponent } from "./header/header.component";
import { ListingComponent } from "./listing/listing.component"
import { MyListingsComponent } from "./my-listings/my-listings.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: "header", component: HeaderComponent },
    { path: "listing", component: ListingComponent },
    { path: "my-listings", component: MyListingsComponent },
    { path: "", pathMatch: "full", redirectTo: "" },
    { path: "**", redirectTo: "" }
]

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
})

export class AppRoutingModule{}