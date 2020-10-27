import { Component, forwardRef, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { configID, minValueConfig, maxValueConfig, responseServer, responseError, greenColor, redColor } from '../../globals';
import { RestApiService } from 'src/app/api.service';

import { Album } from 'src/app/model/album';
import { Artist } from 'src/app/model/artist';
@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss'],
})
export class AddAlbumComponent implements OnInit {
  id: string;
  isAddMode: boolean;
  albumToEdit: null | Album;
  artists: Artist[];
  albums: Album[];
  arr: string[];
  selectedValue: string;

  albumForm: FormGroup;
  formSended: boolean;

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder, private Api: RestApiService, private route: ActivatedRoute) {
    this.arr = [];
    this.albumToEdit = null;
    this.options = fb.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
    });

    this.formSended = false;
    this.albumForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(23)
      ]),
      artistName: new FormControl('', [
        Validators.required
      ]),
      coverUrl: new FormControl('', [
        Validators.pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
      ]),
      year: new FormControl('', [
        this.dateValidator
      ]),
      genre: new FormControl('', [
        Validators.required
      ])
    });
  }

  dateValidator(control) {
    const dateValue = control.value;
    if (minValueConfig < dateValue && maxValueConfig > dateValue) {
      return null;
    } else {
      return { dateValidator: { max: maxValueConfig, min: minValueConfig } };
    }
  }

  onSubmit() {
      const artistId = this.artists.find(element => {
         return element.name === this.albumForm.value.artistName;
      });
      const resultForm = {
        title: this.albumForm.value.title,
        artistId: artistId[configID],
        coverUrl: this.albumForm.value.coverUrl,
        year: this.albumForm.value.year,
        genre: this.albumForm.value.genre
      };
      if (!this.isAddMode && this.albumForm.valid && artistId[configID]) {
        this.Api.putAlbum(this.id, resultForm).then(res => {
        console.log(responseServer, greenColor, res);
        this.albumForm.reset();
      }).catch(err => console.log(responseError, redColor,  err));

      } else {

        if (this.albumForm.valid && artistId[configID]) {
          this.Api.postAlbum(resultForm).then(res => {
          console.log(responseServer, greenColor, res);
          this.albumForm.reset();
        }).catch(err => console.log(responseError, redColor, err));
      }
      }
  }


  onSubmitMore(value) {
    // step 1 the object to array
    const result = Object.keys(value).map( (key) => {
        return [String(key), value[key]];
    });
    // step 2 push the elements
    const arr = [];
    for ( let i = 0; i < result.length; i++ ) {
        for ( let z = 0; z < result[i].length; z++ ) {
           arr.push(result[i][z]);
        }
    }
    // step 3 remove the identity
    const  cleanArr = [];
    for (let j = 0; j < arr.length; j++) {
        if (j === 0 || j % 2 === 0) {
        const onlyLetters = arr[j].slice(0, -1);
        cleanArr.push(onlyLetters);
        } else {
         cleanArr.push(arr[j]);
        }

      }
    // step 4 prepare the object for the api
    const a = cleanArr[1], b = cleanArr[3], c = cleanArr[5], d = cleanArr[7], e = cleanArr[9], f = cleanArr[11], g = cleanArr[13], h = cleanArr[15], i = cleanArr[17], j = cleanArr[19], k = cleanArr[21], l = cleanArr[23], m = cleanArr[25], n = cleanArr[27], o= cleanArr[29];

    const artist1 = {title: a, artistId: b, coverUrl: c, year: d, genre: e };
    const artist2 = {title: f, artistId: g, coverUrl: h, year: i, genre: j };
    const artist3 = {title: k, artistId: l, coverUrl: m, year: n, genre: o };

    const resultArray = [ artist1, artist2, artist3 ];

    // Finally push to the MongoDB.
    this.Api.postAlbumMany(resultArray).then(response => {
      console.log(responseServer, greenColor, response);
      // redirectTo all list
    }).catch(err => console.log(responseError, redColor, err));

  }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.artists = await this.Api.getAllArtists();
    // tslint:disable-next-line: new-parens
    const arrArtistsNames = new Array;
    // tslint:disable-next-line
    for (let i = 0; i < this.artists.length ; i++) {
      const name = this.artists[i].name;
      arrArtistsNames.push(name);
    }
    this.arr = arrArtistsNames;
    // Debug with Dev Tools to get this approach ;)
    if (!this.isAddMode) {
      this.albumToEdit = await this.Api.getAlbum(this.id);
      const artist = this.artists.filter(element => {
        return element[configID] === this.albumToEdit.artistId;
      });
      this.albumForm.setValue({
        title: this.albumToEdit.title,
        artistName: artist[0].name,
        coverUrl: this.albumToEdit.coverUrl,
        year: this.albumToEdit.year,
        genre: this.albumToEdit.genre
        });
    }
  }
}



 /*TODO
  - Check for the better way to make iteration on the values
  of de Artist name in the selector.
  - Providers can be a good options
  - other ideas for Present the Names and get the ID in the Add Artist Form.
  */
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => AddAlbumComponent),
  //     multi: true
  //   }
  // ]
