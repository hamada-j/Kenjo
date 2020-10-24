import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/api.service";
import { MatTableDataSource } from "@angular/material/table";
import { Artist } from 'src/app/model/artist';
import { Album } from 'src/app/model/album';
import { Router } from '@angular/router';
// Models




@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.scss"]
})
export class AlbumsComponent implements OnInit {

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
    this.router.navigate([`/edit-album/${artistId}`]);
  }
  handleDetail(artistId) {
    this.router.navigate([`detail-album/${artistId}`]);
  }

  async handleDelete(artistId) {
   await this.Api.deleteArtist(artistId).then(async response => {
      console.log(response);
      this.arrArtists = await this.Api.getAllArtists();
      this.router.navigate(["/"]);
    }).catch(err => console.log(err));

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
