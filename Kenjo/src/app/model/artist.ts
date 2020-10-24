export class Artist {
  id: string;
  name: string;
  photoUrl: string;
  birthdate: string;
  deathDate: string;
  // tslint:disable-next-line: variable-name
  _createdAt: string;
  // tslint:disable-next-line: variable-name
  _updatedAt: string;


  constructor(
     pId: string,
     pName: string,
     pPhotoUrl: string,
     pBirthdate: string,
     pDeadDate: string,
     // tslint:disable-next-line: variable-name
     p_CreatedAt: string,
     // tslint:disable-next-line: variable-name
     p_UpdatedAt: string
  ) {
   this.id = pId;
   this.name = pName;
   this.photoUrl = pPhotoUrl;
   this.birthdate = pBirthdate;
   this.deathDate = pDeadDate;
   this._createdAt = p_CreatedAt;
   this._updatedAt = p_UpdatedAt;
  }
}
