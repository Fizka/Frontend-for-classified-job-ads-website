import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})

export class SearchUserComponent implements OnInit {

  usertype: number;
  user2: User[];
  user: User[];
  submitted = false;

  constructor(private dataService: UserService) {
  }

  ngOnInit() {
    this.usertype = 1;
    this.premiumUsers();
  }

  private searchUsers() {
    this.user = [];
    this.dataService.getUserByusertype(this.usertype)
      .subscribe(user => this.user = user);
    this.submitted = true;
  }

  private premiumUsers() {
    this.user2 = [];
    this.dataService.getUserByusertype(1)
      .subscribe(user => this.user2 = user);
  }

  onSubmit() {
    this.searchUsers();
  }


}
