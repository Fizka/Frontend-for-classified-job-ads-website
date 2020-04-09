import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {Advertisement} from "../advertisement";
import {AdvertisementService} from "../advertisement.service";
import {Company} from "../Model/Account/company";
import {Survey} from "../Model/survey/survey";
import {Search} from "../Model/advertisement/search";
import {SearchService} from "../Model/advertisement/search.service";
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn} from "@angular/forms";
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";
@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {

  advertisement: Advertisement = new Advertisement();
  submitted = false;
  company : Company;
  survey : Survey;
  search : Search;
  user : User;



  constructor(private formBuilder: FormBuilder, private advertismentService : AdvertisementService,
              private searchService : SearchService, private router : Router)
  {


  }



  onSubmit() {

    this. save();
  }

  ngOnInit() {
    this.reloadData();
  }

  //nowe ogłoszenie
  newAdvertisement(): void {
    this.submitted = false;
    this.advertisement = new Advertisement();
  }


  //zapis reklamy
  save() {
    this.advertismentService.createAdvertisement(this.company.nip , this.advertisement)
      .subscribe(
        data => {
          console.log(data);
          sessionStorage.setItem('newadd', JSON.stringify(data));
          this.submitted = true;
        },
        error => console.log(error));
    this.advertisement = new Advertisement();
  }

  //załadowanie
  reloadData(){
    this.company = JSON.parse(sessionStorage.getItem('newcom'));
    this.user = JSON.parse(sessionStorage.getItem('newuser'));
  }

  //przejście
  newSurvey(){
    this.router.navigate(['survey-create'])
  }

  //przejście
  Goto(){
    this.router.navigate(['company'])
  }

}


