import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

const SECRET_WORD = environment.secretWord;


@Component({
  selector: "app-landingpage",
  templateUrl: "./landingpage.component.html",
  styleUrls: ["./landingpage.component.scss"]
})

export class LandingPageComponent implements OnInit {
  constructor(private router: Router) {
  }

  handleClick() {
    localStorage.setItem(SECRET_WORD, new Date().toString());
    this.router.navigate(["/"]);
  }

  ngOnInit(): void {}
}
