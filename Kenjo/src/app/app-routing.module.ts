import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./layouts/home/home.component";
import { StoreComponent } from "./modules/store/store.component";
import { AlbumsComponent } from "./modules/albums/albums.component";

import { LandingPageComponent } from "./landing page/landingpage.component";

import { LoginGuard } from "./login.guard";
import { ArtistsComponent } from './modules/artists/artists.component';
import { AddArtistComponent } from './modules/add-artist/add-artist.component';
import { SearchComponent } from './modules/search/search.component';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'land' },
  { path: "land", component: LandingPageComponent },
  {
    path: "",
    component: HomeComponent,
     // canActivate: [LoginGuard],
    children: [
      {
        path: "",
        component: StoreComponent,
        // canActivate: [LoginGuard]
      },
      {
        path: "albums",
        component: AlbumsComponent,
        // canActivate: [LoginGuard]
      },
      {
        path: "artists",
        component: ArtistsComponent,
        // canActivate: [LoginGuard]
      },
      {
        path: "add-artists",
        component: AddArtistComponent,
        // canActivate: [LoginGuard]
      },
      {
        path: "edit/:id",
        component: AddArtistComponent,
        // canActivate: [LoginGuard]
      },
      {
        path: "search",
        component: SearchComponent,
        // canActivate: [LoginGuard]
      },
      {
        path: "detail/:id",
        component: SearchComponent,
        // canActivate: [LoginGuard]
      },
      { path: '**', redirectTo: 'land' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
