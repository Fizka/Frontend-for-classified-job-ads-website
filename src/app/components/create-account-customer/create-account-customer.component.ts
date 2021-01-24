import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Employee} from "../../model/employee";
import {User} from "../../model/user";
import {EmployeeService} from "../../service/employee.service";


@Component({
  selector: 'app-create-account-customer',
  templateUrl: './create-account-customer.component.html',
  styleUrls: ['./create-account-customer.component.css']
})
export class CreateAccountCustomerComponent implements OnInit {

  employeee: Employee = new Employee();
  submitted = false;
  login: string;
  user: User;

  constructor(private router: Router, private accountcustomerService: EmployeeService) {
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('newuser'));
  }

  newCustomer(): void {
    this.submitted = false;
    this.employeee = new Employee();
  }

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

  GoToCV() {
    this.router.navigate(['cv-create'])
  }

  GoToCourseCertificate() {
    this.router.navigate(['create-course-certificate'])
  }

  GoToAccount() {
    this.router.navigate(['employee'])
  }
}
