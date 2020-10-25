import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from 'src/app/api.service';
import { Album } from 'src/app/model/album';
import { Artist } from 'src/app/model/artist';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  id: null | string;
  artist: Artist;
  album: Album;
  arrArtistAlbums: Album[];
  arrAlbums: Album[];
  arrArtists: Artist[];
  hasMoreAlbums: boolean;

  constructor(private Api: RestApiService, private route: ActivatedRoute, private router: Router) {
    this.id = null;
    this.hasMoreAlbums = false;
  }

  handleRedirectArtist(e) {
    this.router.navigate([`/detail/${this.artist['_id']}`]);
  }

  handelSeeAlbum(idAlbum) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([`album/${idAlbum._id}`]);
    });
  }


  async ngOnInit() {

    this.id = this.route.snapshot.params['id']
    this.arrAlbums = await this.Api.getAllAlbums();
    this.arrArtists = await this.Api.getAllArtists();

    // get the Album
    const arrAl = await this.arrAlbums.filter(album => album['_id'] === this.id);
    this.album = arrAl[0];

    // get the Albums of the Artist
    this.arrArtistAlbums = await this.arrAlbums.filter(album => album.artistId === this.album.artistId);
    // Check for more albums
    // this.arrArtistAlbums.length <= 1 ? this.hasMoreAlbums : !this.hasMoreAlbums;
    if (this.arrArtistAlbums.length > 1) {
      this.hasMoreAlbums = true;
      this.arrArtistAlbums = this.arrArtistAlbums.filter(( obj ) => { return obj['_id'] !== this.album['_id'];});
    }

    // get the Artist
    const arrAr = await this.arrArtists.filter(artistId => artistId['_id'] === this.album['artistId']);
    this.artist = arrAr[0];

  }

  /*************************
   * This part of code need be refactored in better way
   * Move all extraction to store.service.ts
   * some simplification in the methods
   * TODO
   */
  // tslint:disable-next-line: use-lifecycle-interface
  async ngAfterViewInit() {
    this.id = this.route.snapshot.params['id']
    this.arrAlbums = await this.Api.getAllAlbums();
    this.arrArtists = await this.Api.getAllArtists();

    // get the Album
    const arrAl = await this.arrAlbums.filter(album => album['_id'] === this.id);
    this.album = arrAl[0];

    // get the Artist
    const arrAr = await this.arrArtists.filter(artistId => artistId['_id'] === this.album['artistId']);
    this.artist = arrAr[0];
    console.log(this.artist.photoUrl)

    // tslint:disable-next-line: max-line-length
    document.getElementsByClassName('mat-card-avatar example-header-image')[0].setAttribute('style', `background-image: url("${this.artist.photoUrl}")`);
  }

}
