import { Component, OnInit } from '@angular/core';
import {CVService} from "../Model/documentation/cv.service";
import {Observable} from "rxjs";
import {CV} from "../Model/documentation/cv";
import {Employee} from "../Model/Account/employee";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  cvs: Observable<CV>;
  customer : Employee;
  constructor(private cvService : CVService) { }

  //ładowanie danych
  ngOnInit() {
    this.customer = JSON.parse(sessionStorage.getItem('employee'))
    this.reloadData()
  }

  //pobranie wszystkich cv
  reloadData() {
    this.cvs = this.cvService.getCV(this.customer.idCustomer);
  }

}
