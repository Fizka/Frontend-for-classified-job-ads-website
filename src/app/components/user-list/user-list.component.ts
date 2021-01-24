import {Observable} from 'rxjs';
import {Component, OnInit} from "@angular/core";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  deleteUser() {
    this.userService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.users = this.userService.getUserList();
  }


}
