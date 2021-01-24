import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Company} from "../../model/company";
import {User} from "../../model/user";
import {CompanyService} from "../../service/company.service";

@Component({
  selector: 'app-create-account-company',
  templateUrl: './create-account-company.component.html',
  styleUrls: ['./create-account-company.component.css']
})
export class CreateAccountCompanyComponent implements OnInit {

  company: Company = new Company();
  submitted = false;
  user: User;
  login: string;

  constructor(private router: Router,
              private accountCompany: CompanyService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  newCompany(): void {
    this.submitted = false;
    this.company = new Company();
  }

  reloadData() {
    this.user = JSON.parse(sessionStorage.getItem('newuser'))
  }

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

  onSubmit() {
    this.save();
  }

  AddAdd() {
    this.router.navigate(['addadvertisement'])
  }

  GoToAccount() {
    this.router.navigate(['company'])

  }
}
