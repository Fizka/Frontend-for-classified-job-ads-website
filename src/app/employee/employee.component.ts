import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../Model/Account/employee";
import {User} from "../user";
import {UserService} from "../user.service";
import {EmployeeService} from "../Model/Account/employee.service";
import {Observable} from "rxjs";
import {CV} from "../Model/documentation/cv";
import {Router} from "@angular/router";
import {Applicatrion} from "../Model/Account/application";
import {ApplictionService} from "../Model/Account/appliction.service";
import {CVService} from "../Model/documentation/cv.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() empolyee : Employee;
  @Input() user : User;
  @Input() application  : Applicatrion[];
  @Input() cv : CV;
  submitted = false;

  constructor(private router : Router, private userService: UserService, private empoyleeService : EmployeeService,
              private applicationService : ApplictionService, private acService : CVService) { }

  ngOnInit() {
    this.reloadData();
  }

  //ładowanie
  reloadData(){
    //this.empolyee = JSON.parse(sessionStorage.getItem('newemp'))
    this.user = JSON.parse(sessionStorage.getItem('newuser'))
    //this.cv = JSON.parse(sessionStorage.getItem('newcv'))

   this.empoyleeService.getCustomerByidUser(this.user.idUser).
   subscribe(
     data =>
       this.empolyee = data as Employee);
    sessionStorage.setItem('newemp', JSON.stringify(this.empolyee));

  }



  //przejście
  OnSubmit(){
    this.acService.getCvByidCustomer(this.empolyee.idCustomer).
    subscribe(ccc =>
      this.cv = ccc as CV)
    sessionStorage.setItem('cv', JSON.stringify(this.cv));

    this.applicationService.getApplicationByIdCustomer(
      this.empolyee.idCustomer).
    subscribe(
      em =>
        this.application = em);
  }

  OffSubmit(){

  }

}
