import {Component, OnInit, Input} from '@angular/core';

import {UserListComponent} from "../user-list/user-list.component";
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

  @Input() user: User;
  submitted = false;
  subPrem = true;

  constructor(private userService: UserService, private listComponent: UserListComponent) {
  }

  ngOnInit() {
  }

  OnSubmit() {
    this.submitted = true;
  }

  OffSubmit() {
    this.submitted = false;
  }

  updateActive(isActive: boolean) {
    this.userService.updateUser(this.user.idUser,
      {
        login: this.user.login,
        password: this.user.password,
        mail: this.user.mail,
        usertype: this.user.usertype,
        active: isActive
      })
      .subscribe(
        data => {
          console.log(data);
          this.user = data as User;
        },
        error => console.log(error));
  }

  updatePremium(type: number) {
    this.userService.updateUser(this.user.idUser,
      {
        login: this.user.login,
        password: this.user.password,
        mail: this.user.mail,
        usertype: type,
        active: this.user.active
      })
      .subscribe(
        data => {
          console.log(data);
          this.user = data as User;
        },
        error => console.log(error));

    if (type == 1)
      this.subPrem = true;
    if (type == 0)
      this.subPrem = false;
  }

  updateUserlogin(value: string) {
    this.userService.updateUser(this.user.idUser,
      {
        login: value,
        password: this.user.password,
        mail: this.user.mail,
        usertype: this.user.usertype,
        active: this.user.active
      })
      .subscribe(
        data => {
          console.log(data);
          this.user = data as User;
        },
        error => console.log(error));
    this.submitted = false;
  }

  updateUserpassword(value: string) {
    this.userService.updateUser(this.user.idUser,
      {
        login: this.user.login,
        password: value,
        mail: this.user.mail,
        usertype: this.user.usertype,
        active: this.user.active
      })
      .subscribe(
        data => {
          console.log(data);
          this.user = data as User;
        },
        error => console.log(error));

    this.submitted = false;
  }


  deleteUser() {
    this.userService.deleteUser(this.user.idUser)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
