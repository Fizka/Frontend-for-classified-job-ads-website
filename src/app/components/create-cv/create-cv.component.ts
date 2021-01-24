import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";
import {User} from "../../model/user";
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";
import {CV} from "../../model/cv";
import {CVService} from "../../service/cv.service";

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements OnInit {

  cv: CV = new CV();
  submitted = false;
  employee: Employee;
  user: User;


  constructor(private router: Router,
              private singin: AuthenticationService,
              private cvService: CVService,
              private customerService: EmployeeService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  newCV(): void {
    this.submitted = false;
    this.cv = new CV();
  }

  private searchUsers() {
    this.employee = new Employee();
    this.customerService.getCustomerByidUser(this.user.idUser)
      .subscribe(employee => this.employee = employee);

  }

  reloadData() {
    this.user = JSON.parse(sessionStorage.getItem('newuser'))
    this.employee = JSON.parse(sessionStorage.getItem('newemp'))
  }

  save() {
    this.reloadData();
    this.cvService.createCV(this.employee.idCustomer, this.cv)
      .subscribe(
        data => {
          console.log(data);
          sessionStorage.setItem('newcv', JSON.stringify(data));
          this.submitted = true;
        },
        error => console.log(error));
    this.cv = new CV();
  }

  onSubmit() {
    this.save();
  }

  GoTo() {
    this.router.navigate(['employee'])
  }

}
