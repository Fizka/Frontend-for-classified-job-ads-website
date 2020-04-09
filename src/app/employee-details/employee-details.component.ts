import { Component, OnInit } from '@angular/core';
import {Employee} from "../Model/Account/employee";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  //szablony
  empolyee : Employee;
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  OnSubmit(){
  }

  OffSubmit(){
  }
}
