import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
///// FlexLayaut Important ///////////////////////
import { FlexLayoutModule } from "@angular/flex-layout";
///// Angular Material ///////////////////////////
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTreeModule } from "@angular/material/tree";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatListModule } from "@angular/material/list";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSortModule } from "@angular/material/sort";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import {MatDialogModule} from '@angular/material/dialog';

///// Component /////
import { HomeComponent } from "./home.component";
import { StoreComponent } from "src/app/modules/store/store.component";
import { AlbumsComponent } from "src/app/modules/albums/albums.component";
import { SharedModule } from "src/app/shared/shared.module";
import { StoreService } from "src/app/modules/store.service";
import { ArtistsComponent } from 'src/app/modules/artists/artists.component';
import { AddArtistComponent } from '../../modules/add-artist/add-artist.component';
import { SearchComponent } from 'src/app/modules/search/search.component';
import { AlbumComponent } from 'src/app/modules/album/album.component';



@NgModule({
  declarations: [
    HomeComponent,
    StoreComponent,
    AlbumsComponent,
    ArtistsComponent,
    AddArtistComponent,
    SearchComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTreeModule,
    MatStepperModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,

  ],
  providers: [StoreService]
})
export class DefaultModule {}
