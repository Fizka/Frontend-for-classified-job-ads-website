import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AuthenticationService} from "../../service/authentication.service";
import {Advertisement} from "../../model/advertisement";
import {AdvertisementService} from "../../service/advertisement.service";
import {SearchService} from "../../service/search.service";

@Component({
  selector: 'app-advertisement-board',
  templateUrl: './advertisement-board.component.html',
  styleUrls: ['./advertisement-board.component.css']
})
export class AdvertisementBoardComponent implements OnInit {

  advertisement: Observable<Advertisement[]>;
  adverts5: Advertisement[];
  industry: string;
  submitted = false;
  salary: number = 0;
  city: string = "";

  constructor(private loginService: AuthenticationService,
              private advertisementService: AdvertisementService) {
  }

  ngOnInit() {
    this.reloadData();
    this.searchadd();
  }

  IndustryIT() {
    this.industry = "IT";
    this.searchIndustry();
  }

  IndustryBudownictwo() {
    this.industry = "Budownictwo";
    this.searchIndustry();
  }

  IndustryPrawo() {
    this.industry = "Prawo";
    this.searchIndustry();
  }

  IndustryFinanse() {
    this.industry = "Finanse";
    this.searchIndustry();
  }

  onSubmit() {
    if (this.salary > 0 && this.city != "") {
      this.searchIndustryAndCityAndSalary();
    } else if (this.salary > 0) {
      this.searchIndustryAndSalary();
    } else if (this.city != "") {
      this.searchCityAndIndustry();
    }
  }

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

  onnSubmit() {
    this.searchadd();
  }

  private searchadd() {
    this.adverts5 = [];
    this.advertisementService.findBySalary(this.salary)
      .subscribe(user => this.adverts5 = user);
    this.submitted = true;
  }

  private searchCityAndSalary() {
    this.adverts5 = [];
    this.advertisementService.findByCityAndSalary(this.city, this.salary)
      .subscribe(user => this.adverts5 = user);
  }

  private searchIndustryAndCityAndSalary() {
    this.adverts5 = [];
    this.advertisementService.findByIndustryAndCityAndSalary(this.industry, this.city, this.salary)
      .subscribe(user => this.adverts5 = user);
  }

  private searchIndustryAndSalary() {
    this.adverts5 = [];
    this.advertisementService.findByIndustryAndSalary(this.industry, this.salary)
      .subscribe(user => this.adverts5 = user);
  }

  private searchcity() {
    this.adverts5 = [];
    this.advertisementService.findByCity(this.city)
      .subscribe(user => this.adverts5 = user);
  }

  private searchIndustry() {
    this.adverts5 = [];
    this.advertisementService.findByIndustry(this.industry)
      .subscribe(user => this.adverts5 = user);
  }

  private searchCityAndIndustry() {
    this.adverts5 = [];
    this.advertisementService.findByCityAndIndustry(this.industry, this.city)
      .subscribe(user => this.adverts5 = user);
  }

}
