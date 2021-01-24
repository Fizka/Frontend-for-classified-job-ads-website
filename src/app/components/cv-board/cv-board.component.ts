import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeService} from "../../service/employee.service";
import {CVService} from "../../service/cv.service";
import {CV} from "../../model/cv";

@Component({
  selector: 'app-cv-board',
  templateUrl: './cv-board.component.html',
  styleUrls: ['./cv-board.component.css']
})
export class CvBoardComponent implements OnInit {

  cvs: Observable<CV[]>;
  empol: Observable<CV[]>;

  constructor(private cvService: CVService,
              private empoService: EmployeeService) {
  }

  ngOnInit() {
    this.reloadData()
  }

  reloadData() {
    this.cvs = this.cvService.getCVList();
    this.empol = this.empoService.getCustomersList()
  }
}
