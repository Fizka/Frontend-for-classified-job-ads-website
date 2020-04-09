import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Advertisement} from "../advertisement";
import {AdvertisementService} from "../advertisement.service";
import {SearchService} from "../Model/advertisement/search.service";
import {AuthenticationService} from "../Model/SignIn/authentication.service";

@Component({
  selector: 'app-advertisement-board',
  templateUrl: './advertisement-board.component.html',
  styleUrls: ['./advertisement-board.component.css']
})
export class AdvertisementBoardComponent implements OnInit {

  advertisement: Observable<Advertisement[]>;
  adverts : Advertisement[];
  adverts1 : Advertisement[];
  adverts2 : Advertisement[];
  adverts3 : Advertisement[];
  adverts4 : Advertisement[];
  adverts5 : Advertisement[];
  industry : string;
  submitted = false;
  salary : number = 0;
  city : string = "";

  constructor(private loginService : AuthenticationService, private advertisementService: AdvertisementService, private searchService : SearchService) { }

  /*
  ładuje dane
   */

  ngOnInit() {
    this.reloadData();
    this.searchadd();
  }

  IndustryIT(){
    this.industry = "IT";
    this.searchIndustry();
  }
  IndustryBudownictwo(){
    this.industry = "Budownictwo";
    this.searchIndustry();
  }
  IndustryPrawo(){
    this.industry = "Prawo";
    this.searchIndustry();
  }
  IndustryFinanse(){
    this.industry = "Finanse";
    this.searchIndustry();
  }

  onSubmit(){
    if(this.salary > 0 && this.city != "")
    {
      this.searchIndustryAndCityAndSalary();
    }
    else if(this.salary > 0)
    {
      this.searchIndustryAndSalary();
    }
    else if(this.city != "")
    {
      this.searchCityAndIndustry();
    }
  }

  //usuwa ogłoszenia
  deleteAdvertisements() {
    this.advertisementService.deleteAllAdvertisements()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.advertisement = this.advertisementService.getAllAdvertisements();
  }

  //przycisk
  onnSubmit() {
    this.searchadd();
  }

  //wyszukuje
  private searchadd() {
    this.adverts5 = [];
    this.advertisementService.findBySalary(this.salary)
      .subscribe(user => this.adverts5 = user);
    this.submitted = true;
  }

  //wyszukuje
  private searchCityAndSalary() {
    this.adverts5 = [];
    this.advertisementService.findByCityAndSalary(this.city, this.salary)
      .subscribe(user => this.adverts5 = user);
  }

  //wyszukuje
  private searchIndustryAndCityAndSalary() {
    this.adverts5 = [];
    this.advertisementService.findByIndustryAndCityAndSalary(this.industry, this.city, this.salary)
      .subscribe(user => this.adverts5 = user);
  }

  //wyszukuje
  private searchIndustryAndSalary() {
    this.adverts5 = [];
    this.advertisementService.findByIndustryAndSalary(this.industry, this.salary)
      .subscribe(user => this.adverts5 = user);
  }

  //wyszukuje
  private searchcity() {
    this.adverts5 = [];
    this.advertisementService.findByCity(this.city)
      .subscribe(user => this.adverts5 = user);
  }


  //wyszukuje
  private searchIndustry() {
    this.adverts5 = [];
    this.advertisementService.findByIndustry(this.industry)
      .subscribe(user => this.adverts5 = user);
  }

  //wyszukuje
  private searchCityAndIndustry() {
    this.adverts5 = [];
    this.advertisementService.findByCityAndIndustry(this.industry, this.city )
      .subscribe(user => this.adverts5 = user);
  }

}
