import {Component, OnInit} from '@angular/core';


import {Router} from "@angular/router";
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {

  user: User = new User();
  submitted = false;

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    sessionStorage.clear()
    this.userService.createUser(this.user)
      .subscribe(
        data => {
          console.log(data);
          sessionStorage.setItem('newuser', JSON.stringify(data));
          this.submitted = true;
        },
        error => console.log(error));
    this.user = new User();
  }

  kontoFirma() {
    this.router.navigate(['account-company'])
  }

  kontoKlient() {
    this.router.navigate(['account-customer'])
  }

  //zapis
  onSubmit() {
    this.save();
  }
}
