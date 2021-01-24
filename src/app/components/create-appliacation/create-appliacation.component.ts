import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {Applicatrion} from "../../model/application";
import {Company} from "../../model/company";
import {User} from "../../model/user";
import {Advertisement} from "../../model/advertisement";
import {Employee} from "../../model/employee";
import {ApplictionService} from "../../service/appliction.service";

@Component({
  selector: 'app-create-appliacation',
  templateUrl: './create-appliacation.component.html',
  styleUrls: ['./create-appliacation.component.css']
})
export class CreateAppliacationComponent implements OnInit {

  application: Applicatrion = new Applicatrion();
  submitted = false;
  company: Company;
  user: User;
  advertisement: Advertisement;
  employ: Employee;

  constructor(private ApplicationService: ApplictionService,
              private router: Router) {
  }

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

  ToKonto() {
    this.router.navigate(['employee'])
  }

}
