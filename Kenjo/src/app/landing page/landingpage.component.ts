import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RestApiService } from "../api.service";
import { Router } from "@angular/router";
//import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: "app-landingpage",
  templateUrl: "./landingpage.component.html",
  styleUrls: ["./landingpage.component.scss"]
})

export class LandingPageComponent implements OnInit {
  secretWord: string;
// @ViewChild('c') c: ElementRef;
  constructor(private router: Router) {
    this.secretWord = 'fakeLogin';
  }

  handleClick() {
    this.router.navigate(["/"]);
  }

  ngOnInit(): void {}

  // tslint:disable-next-line: use-lifecycle-interface
  // ngAfterViewInit() {
  //   const instanceC = new M.Parallax.init(this.c.nativeElement);
  // }

}
