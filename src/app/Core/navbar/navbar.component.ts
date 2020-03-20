import { User } from "./../../Models/User";
import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {

  constructor(public userService: UserService) {}

  invitations = this.userService.currentUser.invitations.length;
  users;
  
  subNav = false;
  searchResult = false;
  match = false;
  searchedBy="people"
  activeClicked(searchedBy){

this.searchedBy=searchedBy;
  }
  enableSeachBy() {
    this.subNav = true;
  }
  disableSeachBy() {
    this.subNav = false;
  }
  enableSeachResult() {
    this.searchResult = true;
    this.subNav = false;
  }
  disableSeachResult() {
    this.searchResult = false;
  }
  SeachResult(e) {
    if(e.target["value"]!="")
    {
      this.enableSeachResult();

    }
    else
    {
      this.disableSeachResult();
      this.enableSeachBy();
    }
    if(this.searchedBy=="people"){

      this.users = this.userService.getByName(e.target["value"]);
    }
    else if(this.searchedBy=="job"){

      this.users = this.userService.getByJob(e.target["value"]);
    }
    else if(this.searchedBy=="loc"){

      this.users = this.userService.getByLoc(e.target["value"]);
    }
    console.log(this.users)
    if (this.users.length === 0) {
      this.match = true;
      this.disableSeachBy();
    }
  }
  ngOnInit() {}
}
