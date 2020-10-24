export class Album {
  id: string;
  title: string;
  artistId: string;
  coverUrl: string;
  year: number;
  genre: string;
  // tslint:disable-next-line: variable-name
  _createdAt: string;
  // tslint:disable-next-line: variable-name
  _updatedAt: string;


  constructor(
     pId: string,
     pTitle: string,
     pArtistId: string,
     pCoverUrl: string,
     pYear: number,
     pGenre: string,
     // tslint:disable-next-line: variable-name
     p_CreatedAt: string,
     // tslint:disable-next-line: variable-name
     p_UpdatedAt: string
  ) {
   this.id = pId;
   this.title = pTitle;
   this.artistId = pArtistId;
   this.coverUrl = pCoverUrl;
   this.year = pYear;
   this.genre = pGenre;
   this._createdAt = p_CreatedAt;
   this._updatedAt = p_UpdatedAt;
  }
}
