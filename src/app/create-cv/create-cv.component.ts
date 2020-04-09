import {Component, Input, OnInit} from '@angular/core';
import {CV} from "../Model/documentation/cv";
import {CVService} from "../Model/documentation/cv.service";
import {User} from "../user";
import {Employee} from "../Model/Account/employee";
import {Company} from "../Model/Account/company";
import {EmployeeService} from "../Model/Account/employee.service";
import {Observable} from "rxjs";
import {AuthenticationService} from "../Model/SignIn/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements OnInit {

  cv : CV = new CV();
  submitted =false;
  employee : Employee;
  user : User;


  constructor(private router : Router, private singin: AuthenticationService,
              private cvService : CVService, private customerService : EmployeeService) { }

  ngOnInit() {
   this.reloadData();
  }

  //czyszczenie
  newCV(): void {
    this.submitted = false;
    this.cv = new CV();
  }


  private searchUsers() {
    this.employee = new Employee();
    this.customerService.getCustomerByidUser(this.user.idUser)
    .subscribe(employee => this.employee = employee);

  }

  //ładowanie danych
  reloadData(){
    this.user = JSON.parse(sessionStorage.getItem('newuser'))
    this.employee = JSON.parse(sessionStorage.getItem('newemp'))
  }

  //zapis cv
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

  //zapis
  onSubmit() {
    this.save();
  }

  //przejscie
  GoTo(){
    this.router.navigate(['employee'])
  }

}
