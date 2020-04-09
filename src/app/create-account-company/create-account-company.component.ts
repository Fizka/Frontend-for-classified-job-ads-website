import {Component, Input, OnInit} from '@angular/core';
import {CompanyService} from "../Model/Account/company.service";
import {Company} from "../Model/Account/company";
import {User} from "../user";
import {Observable} from "rxjs";
import {UserService} from "../user.service";
import {AuthenticationService} from "../Model/SignIn/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-account-company',
  templateUrl: './create-account-company.component.html',
  styleUrls: ['./create-account-company.component.css']
})
export class CreateAccountCompanyComponent implements OnInit {

  company : Company = new Company();
  submitted = false;
  user: User;
  login : string;

  constructor(private router : Router , private accountCompany : CompanyService, private userService: UserService, auth : AuthenticationService) { }

  ngOnInit() {
    this.reloadData();
  }

  //czyszczenie konta-firmy
  newCompany(): void {
    this.submitted = false;
    this.company = new Company();
  }

  //ładowanie danych
  reloadData(){
  this.user = JSON.parse(sessionStorage.getItem('newuser'))
  }

  //tworzenie konta firmy
  save() {
    this.accountCompany.createCompany(this.user.idUser, this.company)
      .subscribe(
        data => {
          console.log(data);
            sessionStorage.setItem('newcom', JSON.stringify(data));
          this.submitted = true;
        },
        error => console.log(error));
    this.company = new Company();
  }


  onSubmit(){
    this.save();
  }

  //przejscię do dodania reklamy
  AddAdd(){
    this.router.navigate(['addadvertisement'])
  }

  //przejście do kursów
  GoToAccount(){
    this.router.navigate(['company'])

  }
}
