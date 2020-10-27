
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

import { minDateConfig, maxDateConfig, responseServer, responseError, greenColor, redColor } from '../../globals';
import { RestApiService } from 'src/app/api.service';

import { Artist } from 'src/app/model/artist';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.scss']
})
export class AddArtistComponent implements OnInit {
  id: string;
  isAddMode: boolean;
  artistToEdit: null | Artist;
  formulario: FormGroup;
  formSended: boolean;

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder, private Api: RestApiService, private route: ActivatedRoute) {
    this.artistToEdit = null;
    this.options = fb.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
    });

    this.formSended = false;
    this.formulario = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(23)
      ]),
      photoUrl: new FormControl('', [
        Validators.pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
      ]),
      birthdate: new FormControl('', [
        this.dateValidator
      ]),
      deathDate: new FormControl('', [
        this.dateValidator
      ])
    });
  }

  dateValidator(control) {
    const dateValue = control.value;
    const a = moment(minDateConfig).isBefore(dateValue, 'year');
    const b = moment(maxDateConfig).isAfter(dateValue, 'year');
    if (a && b) {
      return null;
    } else {
      return { dateValidator: { max: maxDateConfig, min: minDateConfig } };
    }
  }

  deathValidator(control) {
    const value = this.dateValidator(control)
    return value || null;
    // const dateValue = control.value;
    // const a = moment(minDateConfig).isBefore(dateValue, 'year');
    // const b = moment(maxDateConfig).isAfter(dateValue, 'year');

    // if ( null || (a && b)) {
    //   return null;
    // } else {
    //   return { dateValidator: { max: maxDateConfig, min: minDateConfig } };
    // }
  }

  onSubmit() {

    if (!this.isAddMode && this.formulario.valid) {
      this.Api.putArtist(this.id, this.formulario.value).then(res => {
        console.log(responseServer, greenColor, res);
        this.formulario.reset();
      }).catch(err => console.log(responseError, redColor ,  err));

    } else {

      if (this.formulario.valid) {
      this.Api.postArtist(this.formulario.value).then(res => {
        console.log(responseServer, greenColor, res);
        this.formulario.reset();
      }).catch(err => console.log(responseError, redColor , err));
     }
    }
  }


  ///// Method the multiple result from Form for push to database /////////////

  onSubmitMore(value) {

    // step 1 the object to array

    console.log(value);
    const arr = [];
    const result = Object.keys(value).map( (key) => {
        return [String(key), value[key]];
    });

    // step 2 push the elements

    for ( let i = 0; i < result.length; i++ ) {
        for ( let z = 0; z < result[i].length; z++ ) {
           arr.push(result[i][z]);
        }
    }

    // step 3 remove the identity

    const  cleanArr = [];
    for (let j = 0; j < arr.length; j++) {
        if (j === 0 || j % 2 === 0) {
         arr[j].slice(0, -1);
        }
        cleanArr.push(arr[j]);
      }

    // step 4 prepare the object for the api

    const a = cleanArr[1], b = cleanArr[3], c = cleanArr[5], d = cleanArr[7], e = cleanArr[9], f = cleanArr[11], g = cleanArr[13], h = cleanArr[15], i = cleanArr[17], j = cleanArr[19], k = cleanArr[21], l = cleanArr[23];

    const artist1 = {name: a, photoUrl: b, birthdate: c, deathDate: d };
    const artist2 = {name: e, photoUrl: f, birthdate: g, deathDate: h };
    const artist3 = {name: i, photoUrl: j, birthdate: k, deathDate: l };

    const resultArray = [ artist1, artist2, artist3 ];

    // Finally push to the MongoDB.
    this.Api.postArtistsMany(resultArray).then(response => {
      console.log(responseServer, greenColor, response);
      // redirectTo all list
    }).catch(err => console.log(responseError, redColor , err));

  }

  async ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    // Debug with Dev Tools to get this approach ;)
    if (!this.isAddMode) {
      this.artistToEdit = await this.Api.getArtist(this.id);
      this.formulario.setValue({
        name: this.artistToEdit.name,
        photoUrl: this.artistToEdit.photoUrl,
        birthdate: this.artistToEdit.birthdate.substr(0, 10),
        deathDate: this.artistToEdit.deathDate ? this.artistToEdit.deathDate.substr(0, 10) : null,
        });
    }
  }
}
