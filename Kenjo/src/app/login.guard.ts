import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    const date1 = moment();
    const date2 = localStorage.getItem("fakeLogin");
    const difference = date1.diff(date2, "minutes");
    console.log(date1,date2,difference);
    if ( difference <= 40) {
      return true;
    } else {
      this.router.navigate(["/land"]);
      return false;
    }
  }
}
