import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../Model/Account/employee";
import {EmployeeService} from "../Model/Account/employee.service";
import {Router} from "@angular/router";
import {User} from "../user";
import {Company} from "../Model/Account/company";

@Component({
  selector: 'app-create-account-customer',
  templateUrl: './create-account-customer.component.html',
  styleUrls: ['./create-account-customer.component.css']
})
export class CreateAccountCustomerComponent implements OnInit {

  employeee : Employee = new Employee();
  submitted  = false;
  login : string;
  user : User;

  constructor(private router : Router, private accountcustomerService : EmployeeService) { }

  //wczytanie
  ngOnInit() {
   this.user = JSON.parse(sessionStorage.getItem('newuser'));
  }

  //czyszczenie
  newCustomer(): void {
    this.submitted = false;
    this.employeee = new Employee();
  }

  //zapis klienta
  save() {
    this.accountcustomerService.createCustomer(this.user.idUser, this.employeee)
      .subscribe(
        data => {
          console.log(data);
          sessionStorage.setItem('newemp', JSON.stringify(data));
          this.submitted = true;
        },
        error => console.log(error));
    this.employeee = new Employee();
  }

  onSubmit() {
    this.save();
  }

  //przejście
  GoToCV(){
    this.router.navigate(['cv-create'])
  }

  //przejście
  GoToCourseCertificate(){
    this.router.navigate(['create-course-certificate'])
  }

  //przejście
  GoToAccount(){
    this.router.navigate(['employee'])
  }
}
