import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import * as moment from "moment";
import { environment } from "../environments/environment";

const SECRET_WORD = environment.secretWord;
@Injectable({
  providedIn: "root"
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate() {
    const date1 = moment();
    const date2 = localStorage.getItem(SECRET_WORD);
    const difference = date1.diff(date2, "minutes");
    if ( difference <= 20) {
      return true;
    } else {
      this.router.navigate(["/land"]);
      return false;
    }
  }
}
