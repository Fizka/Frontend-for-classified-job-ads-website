import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../user";
import {CV} from "../Model/documentation/cv";
import {CVService} from "../Model/documentation/cv.service";
import {EmployeeService} from "../Model/Account/employee.service";

@Component({
  selector: 'app-cv-board',
  templateUrl: './cv-board.component.html',
  styleUrls: ['./cv-board.component.css']
})
export class CvBoardComponent implements OnInit {

  cvs: Observable<CV[]>;
  empol : Observable<CV[]>;
  constructor(private cvService : CVService, private empoService: EmployeeService) { }

  //wczytanie
  ngOnInit() {
    this.reloadData()
  }

  //pobranie danych
  reloadData() {
    this.cvs = this.cvService.getCVList();
    this.empol = this.empoService.getCustomersList()
  }
}
