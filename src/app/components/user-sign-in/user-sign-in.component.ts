import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  submitted = false;
  invalidLogin = false;
  user : User;
  username = '';
  password = '';

  constructor(private router: Router,  private dataService: UserService) {
  }

  ngOnInit() {
     //this.user1 = JSON.parse(sessionStorage.getItem('newuser'))
     //this.user = JSON.parse(sessionStorage.getItem('newuser'))
  }

  onSubmit() {
    this.searchUsers(this.username)
    this.checkLogin();

  }

  private searchUsers(username) {
      this.dataService.getUserbylogin(username)
        .subscribe(
          data => {
            this.user = data as User;
            console.log(data);
            sessionStorage.setItem('newuser', JSON.stringify(this.user));
          },
          error => console.log(error));
  }

  isUserLoggedIn() {
    if( (this.user === null))
    {
      return true
    }
    else {
      return false
    }
    }

  authenticate(username, password) {
    if (username === this.user.login && password === this.user.password) {
      //sessionStorage.setItem('username', username)
      //sessionStorage.setItem('newuser', JSON.stringify(this.user1));
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    sessionStorage.clear();
  }

  checkLogin() {
    if (this.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['advertisement'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}




