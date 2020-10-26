import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from 'moment';


@Component({
  selector: "app-landingpage",
  templateUrl: "./landingpage.component.html",
  styleUrls: ["./landingpage.component.scss"]
})

export class LandingPageComponent implements OnInit {
  secretWord: string;
  constructor(private router: Router) {
    this.secretWord = 'fakeLogin';
  }

  handleClick() {
    localStorage.setItem('secretWord_Welcome_hashed_Or_Token', new Date().toString());
    this.router.navigate(["/"]);
  }

  ngOnInit(): void {}

  // tslint:disable-next-line: use-lifecycle-interface
  // ngAfterViewInit() {
  //   const instanceC = new M.Parallax.init(this.c.nativeElement);
  // }

}
