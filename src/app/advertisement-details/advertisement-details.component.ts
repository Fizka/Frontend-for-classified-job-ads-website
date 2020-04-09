import {Component, Input, OnInit} from '@angular/core';

import {Advertisement} from "../advertisement";
import {Router} from "@angular/router";

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.css']
})
export class AdvertisementDetailsComponent implements OnInit {

  @Input() advertisement : Advertisement;
  submitted = false;

  constructor(private router : Router) { }

  OnSubmit(){
    this.submitted = true;
  }

  OffSubmit(){
    this.submitted = false;
  }

  ngOnInit() {
  }

  //przejście
  newApplication(){
    sessionStorage.setItem('newapl', JSON.stringify(this.advertisement));
    sessionStorage.setItem('newcom', JSON.stringify(this.advertisement.companyAdvertisement));
    this.router.navigate(['application'])

  }

}
