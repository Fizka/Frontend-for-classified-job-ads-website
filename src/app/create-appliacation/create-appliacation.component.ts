import { Component, OnInit } from '@angular/core';
import {Employee} from "../Model/Account/employee";
import {Applicatrion} from "../Model/Account/application";
import {ApplictionService} from "../Model/Account/appliction.service";
import {Company} from "../Model/Account/company";
import {User} from "../user";
import {Advertisement} from "../advertisement";
import {CV} from "../Model/documentation/cv";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-appliacation',
  templateUrl: './create-appliacation.component.html',
  styleUrls: ['./create-appliacation.component.css']
})
export class CreateAppliacationComponent implements OnInit {

  application : Applicatrion = new Applicatrion();
  submitted  = false;
  company : Company;
  user : User;
  advertisement : Advertisement;
  employ : Employee;

  constructor(private ApplicationService : ApplictionService, private router : Router) { }


  //ładowanie danych
  ngOnInit() {
    this.company = JSON.parse(sessionStorage.getItem('newcom'));
    this.user = JSON.parse(sessionStorage.getItem('newuser'));
    this.advertisement = JSON.parse(sessionStorage.getItem('newapl'));
    this.employ = JSON.parse(sessionStorage.getItem('newemp'));
    this.company.nip = 11;
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  //zapis aplikacji na ogłoszenie
  save() {
    this.ApplicationService.createAppliction(this.employ.idCustomer, this.company.nip,
      this.advertisement.idAdvertisement, this.application)
      .subscribe(
        data => {
          console.log(data);
          sessionStorage.setItem('newappli', JSON.stringify(data));
        },
        error => console.log(error));
    this.application = new Applicatrion();
    this.submitted = true;
  }

  ToKonto(){
    this.router.navigate(['employee'])
  }

}
