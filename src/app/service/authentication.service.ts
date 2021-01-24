import { Injectable } from '@angular/core';
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user1 : User;
  user : User;
  constructor() { }

  ngOnInit() {
    this.user1 = JSON.parse(sessionStorage.getItem('newuser'))
    this.user = JSON.parse(sessionStorage.getItem('user'))
  }


  admincheck(login, password) {
    let user = sessionStorage.getItem('newuser')
    if (login === "admin" && password === "haslo") {
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('newuser')
    console.log(!(user === null))
    return !(user === null)
  }

  isComLoggedIn() {
    let user = sessionStorage.getItem('newcom')
    console.log(!(user === null))
    return !(user === null)
  }

  isEmpLoggedIn() {
    let user = sessionStorage.getItem('newemp')
    console.log(!(user === null))
    return !(user === null)
  }

  isUserreje() {
    let user = sessionStorage.getItem('newuser')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('user')
  }

}
