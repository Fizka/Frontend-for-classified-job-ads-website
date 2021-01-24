import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../../model/employee";
import {CV} from "../../model/cv";

@Component({
  selector: 'app-cv-detalis',
  templateUrl: './cv-detalis.component.html',
  styleUrls: ['./cv-detalis.component.css']
})
export class CvDetalisComponent implements OnInit {

  @Input() cv: CV;
  @Input() empolyee: Employee;
  submitted = false;

  constructor() {
  }

  ngOnInit() {
    this.empolyee = this.cv.cv;
  }

}
