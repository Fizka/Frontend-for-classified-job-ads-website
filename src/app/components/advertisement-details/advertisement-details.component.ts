import {Component, Input, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {Advertisement} from "../../model/advertisement";

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.css']
})
export class AdvertisementDetailsComponent implements OnInit {

  @Input() advertisement: Advertisement;
  submitted = false;

  constructor(private router: Router) {
  }

  OnSubmit() {
    this.submitted = true;
  }

  OffSubmit() {
    this.submitted = false;
  }

  ngOnInit() {
  }

  //przejście
  newApplication() {
    sessionStorage.setItem('newapl', JSON.stringify(this.advertisement));
    sessionStorage.setItem('newcom', JSON.stringify(this.advertisement.companyAdvertisement));
    this.router.navigate(['application'])

  }

}
