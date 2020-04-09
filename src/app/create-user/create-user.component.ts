import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})


export class CreateUserComponent implements OnInit {

  user: User = new User();
  submitted = false;

  constructor(private router : Router, private userService: UserService) { }

  ngOnInit() {
  }

  //czyszczenie
  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  //tworzenie podstawowego użytkownika
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

  //przejscie
  kontoFirma(){
    this.router.navigate(['account-company'])
  }

  //przejscie
  kontoKlient(){
    this.router.navigate(['account-customer'])
  }

  //zapis
  onSubmit() {
    this.save();
  }
}
