import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  mail: string;
  user: User = new User();
  submitted = false;

  constructor(private dataService: UserService) { }

  ngOnInit() {
  }

  private searchUsers() {
    this.dataService.getUserBymail(this.mail)
      .subscribe(user => this.user = user);
    this.submitted = true;
  }

  onSubmit() {
    this.searchUsers();
  }

  logOut(){
    this.submitted = false;
    this.user = new User();
  }

}




