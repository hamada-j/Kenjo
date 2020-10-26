import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() sideBar: EventEmitter<any>;
  secretWord: string;

  constructor(private router: Router) {
    this.sideBar = new EventEmitter();
    this.secretWord = 'fakeLogin';
  }

  ngOnInit(): void {}

  handleClick() {
    localStorage.removeItem('secretWord_Welcome_hashed_Or_Token');
    this.router.navigate(["/land"]);
  }


  handleSideBar() {
    this.sideBar.emit();
  }
}
