import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from 'src/app/api.service';
import { Album } from 'src/app/model/album';
import { Artist } from 'src/app/model/artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isSearchMode: boolean;
  artistDetails: Artist;
  arrArtists: Artist[];
  arrAlbums: Album[];
  arrArtistAlbums: Album[];
  id: string;
  resultSearch: null | Artist;
  constructor(private Api: RestApiService, private route: ActivatedRoute, private router: Router) {
    this.resultSearch = null;
  }

  handleSearch(value) {
    for (let i = 0; i < this.arrArtists.length; i++) {
      if (this.arrArtists[i].name === value.textUser) {
          return  this.resultSearch = this.arrArtists[i] ;
      }
    }
  }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isSearchMode = !this.id;
    if (!this.isSearchMode) {
      this.artistDetails = await this.Api.getArtist(this.id);
      this.arrAlbums = await this.Api.getAllAlbums();

      this.arrArtistAlbums = this.arrAlbums.filter(albumId => albumId.artistId === this.id);
    } else if (this.isSearchMode) {
      this.arrArtists = await this.Api.getAllArtists();
    }
  }
}


   /*TODO: this part of code is pending for implementation in the good way and validation mechanism */
    /*
    if (value.textUser !== "" ) {
      const mechanism = function search(nameKey, inArray){
                        // tslint:disable-next-line: prefer-for-of
                            for (let i = 0; i < inArray.length; i++) {
                                  if (inArray[i].name === nameKey) {
                                        return inArray[i];
                                  }
                              }
                            };
      let result = mechanism(value.textUser, this.arrArtists);
      console.log('pass for good result',result)
      if ( result = {} || result === undefined || result === null ) {
          console.log('pass for bad 1 result');
          return  this.resultSearch = 'Sorry, your input is incorrect';
          } else {
              const id = result.id;
              return this.router.navigate([`detail/${id}`]);
          }
    } else {
      console.log('pass for bad 2 result');
      this.resultSearch = 'Sorry, your input is incorrect';
    }
    */
