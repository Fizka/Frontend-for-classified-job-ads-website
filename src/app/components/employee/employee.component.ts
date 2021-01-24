import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../../model/employee";
import {User} from "../../model/user";
import {Applicatrion} from "../../model/application";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {ApplictionService} from "../../service/appliction.service";
import {EmployeeService} from "../../service/employee.service";
import {CV} from "../../model/cv";
import {CVService} from "../../service/cv.service";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() empolyee: Employee;
  @Input() user: User;
  @Input() application: Applicatrion[];
  @Input() cv: CV;
  submitted = false;
  aktywny = "aktywny";
  nieaktywny = "nie aktywny";

  constructor(private router: Router,
              private userService: UserService,
              private empoyleeService: EmployeeService,
              private applicationService: ApplictionService,
              private acService: CVService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    //this.empolyee = JSON.parse(sessionStorage.getItem('newemp'))
    this.user = JSON.parse(sessionStorage.getItem('newuser'))
    //this.cv = JSON.parse(sessionStorage.getItem('newcv'))
    this.empoyleeService.getCustomerByidUser(this.user.idUser).subscribe(
      data =>
        this.empolyee = data as Employee);
    sessionStorage.setItem('newemp', JSON.stringify(this.empolyee));
  }

  OnSubmit() {
    this.acService.getCvByidCustomer(this.empolyee.idCustomer).subscribe(ccc =>
      this.cv = ccc as CV)
    sessionStorage.setItem('cv', JSON.stringify(this.cv));

    this.applicationService.getApplicationByIdCustomer(
      this.empolyee.idCustomer).subscribe(
      em =>
        this.application = em);
  }

  OffSubmit() {
  }

}
