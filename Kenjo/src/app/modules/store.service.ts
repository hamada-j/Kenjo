import { Injectable } from "@angular/core";
import { merge, Observable, of as observableOf } from "rxjs";
import { catchError } from "rxjs/operators";

/*

TODO

Refactor all methods from the components here,
that the treatment of data will be here and
in component only presentation or get.

*/
import { RestApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class StoreService {

  constructor() {}

}
