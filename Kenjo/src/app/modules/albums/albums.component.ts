import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { configID, artistID, responseServer, responseError, greenColor, redColor } from '../../globals';
import { RestApiService } from "src/app/api.service";

import { Artist } from 'src/app/model/artist';
import { Album } from 'src/app/model/album';

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.scss"],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AlbumsComponent implements OnInit {
  artist: Artist;
  artistId: null | string;
  album: Album;
  albumOfArtist: Album[];
  dataSource: unknown;
  arrArtists: Artist[];
  arrAlbums: Album[];
  arrArtistAlbums: Album[];
  columnsToDisplay = ['title', 'genre', 'year'];

  expandedElement: ArtistElement | null;
    constructor(private Api: RestApiService, private router: Router) {
    this.artistId = null;
    this.arrArtists  = [];
    this.arrAlbums = [];
    this.arrArtistAlbums = [];
  }



  async handleClick(Id) {
    // get the Album
    const arrAl = await this.arrAlbums.filter(album => album[configID] === Id);
    this.album = arrAl[0];

    // get the Albums of the Artist
    const arr = await this.arrAlbums.filter(album => album.artistId === this.album.artistId);
    this.albumOfArtist = arr.filter(( obj ) => obj[configID] !== this.album[configID]);

    // get the Artist
    const arrAr = await this.arrArtists.filter(artistId => artistId[configID] === this.album[artistID]);
    this.artist = arrAr[0];
    this.artistId = this.album[artistID];
  }

  handleRedirect(e) {
    this.router.navigate([`/detail/${this.artist[configID]}`]);
  }

  handleEdit(albumId) {
    this.router.navigate([`/update-album/${albumId}`]);
  }
  handleDetail(albumId) {
    this.router.navigate([`album/${albumId}`]);
  }
  handleRedirectToAlbum(album) {
    this.router.navigate([`album/${album._id}`]);
  }

  async handleDelete(albumId) {
   await this.Api.deleteAlbum(albumId).then(async response => {
      console.log(responseServer, greenColor, response);
      this.arrAlbums = await this.Api.getAllAlbums();
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([`/albums/`]);
    });
    }).catch(err => console.log(responseError, redColor, err));
  }


  async ngOnInit() {
    this.arrAlbums = await this.Api.getAllAlbums();
    this.arrArtists = await this.Api.getAllArtists();
    this.dataSource = this.arrAlbums;

  }

}
export interface ArtistElement {
  title: string;
  genre: string;
  year: number;
  // created: string;
  // updated: string;
}
