import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { RestApiService } from 'src/app/api.service';
import { Artist } from '../../model/artist';
import { Album } from 'src/app/model/album';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})



export class ArtistsComponent implements OnInit {

dataSource: unknown;
arrArtists: Artist[];
arrAlbums: Album[];
arrArtistAlbums: Album[];
columnsToDisplay = ['name', 'birthdate', 'deathDate'];
expandedElement: ArtistElement | null;
  constructor(private Api: RestApiService, private router: Router) {
    this.arrArtists  = [];
    this.arrAlbums = [];
    this.arrArtistAlbums = [];
  }



  async handleClick(artistId) {
    this.arrArtistAlbums = this.arrAlbums.filter(albumId => albumId.artistId === artistId);
  }

  handleEdit(artistId) {
    this.router.navigate([`/edit/${artistId}`]);
  }
  handleDetail(artistId) {
    this.router.navigate([`detail/${artistId}`]);
  }

  async handleDelete(artistId) {
   await this.Api.deleteArtist(artistId).then(async response => {
      console.log('%cResponse Server', 'color: green;', response);
      this.arrArtists = await this.Api.getAllArtists();
      this.router.navigate(["/"]);
    }).catch(err => console.log('%cError', 'color: red;', err));

  }


  async ngOnInit() {
    this.arrArtists = await this.Api.getAllArtists();
    this.dataSource = this.arrArtists;
    this.arrAlbums = await this.Api.getAllAlbums();
  }

}
export interface ArtistElement {
  name: string;
  birthdate: number;
  deathDate: number;
  photoUrl: string;
}
