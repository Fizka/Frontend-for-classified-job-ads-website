import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../../model/employee";
import {CV} from "../../model/cv";
import {CVService} from "../../service/cv.service";


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  cvs: Observable<CV>;
  customer : Employee;
  constructor(private cvService : CVService) { }

  ngOnInit() {
    this.customer = JSON.parse(sessionStorage.getItem('employee'))
    this.reloadData()
  }

  reloadData() {
    this.cvs = this.cvService.getCV(this.customer.idCustomer);
  }

}
