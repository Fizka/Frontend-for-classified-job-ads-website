import {Component, Input, OnInit} from '@angular/core';

import {Advertisement} from "../advertisement";

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.css']
})
export class AdvertisementDetailsComponent implements OnInit {
  @Input() advertisement : Advertisement;

  constructor() { }

  ngOnInit() {
  }

}
