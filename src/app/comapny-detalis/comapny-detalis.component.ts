import {Component, Input, OnInit} from '@angular/core';
import {Company} from "../Model/Account/company";
import {CompanyService} from "../Model/Account/company.service";
import {User} from "../user";
import {Employee} from "../Model/Account/employee";
import {Advertisement} from "../advertisement";
import {Router} from "@angular/router";
import {CV} from "../Model/documentation/cv";
import {Applicatrion} from "../Model/Account/application";
import {ApplictionService} from "../Model/Account/appliction.service";
import {AdvertisementService} from "../advertisement.service";

@Component({
  selector: 'app-comapny-detalis',
  templateUrl: './comapny-detalis.component.html',
  styleUrls: ['./comapny-detalis.component.css']
})
export class ComapnyDetalisComponent implements OnInit {

  @Input() company : Company;
  @Input() user: User;
  @Input() advertisement : Advertisement;
  submitted=false;
  submitted1 = false;
  submitted2 = false;
  status = "Rozważana";
  status2 = "Rozważana";
  @Input() application : Applicatrion[];
  constructor(private companyService : CompanyService, private router : Router, private addverService : AdvertisementService,
              private applicationService : ApplictionService) { }

  ngOnInit() {
    this.reloadData()
  }


  OffSubmit(){
    this.submitted = false;
  }

  //ładuje dane
  reloadData() {
    //this.company = JSON.parse(sessionStorage.getItem('newcom'))
    this.user = JSON.parse(sessionStorage.getItem('newuser'))
    //this.advertisement = JSON.parse(sessionStorage.getItem('newadd'))

    this.companyService.getCompanyByIdUser(this.user.idUser).
    subscribe(
      data =>
        this.company = data as Company);
    sessionStorage.setItem('newcom', JSON.stringify(this.company));
  }

  DodajOgloszenie(){
    this.router.navigate(['addadvertisement'])
  }

  OnSubmit(){
    this.addverService.getAdvertisementBynip(this.company.nip).
    subscribe(ccc =>
      this.advertisement = ccc as Advertisement)
    sessionStorage.setItem('add', JSON.stringify(this.advertisement));

    this.applicationService.getApplicationByIdCustomer(
      this.company.nip).
    subscribe(
      em =>
        this.application = em);
  }

  OnSubmity(){
    if(this.submitted1 == false)
      this.submitted1 = true;
    else
      this.submitted1 = false;
  }

  zmiana(){
    this.status = "Skontaktowano się z kandydatem";
  }

  OnSubmity2(){
    if(this.submitted2 == false)
      this.submitted2 = true;
    else
      this.submitted2 = false;
  }

  zmiana2(){
    this.status2 = "Skontaktowano się z kandydatem";
  }
}
