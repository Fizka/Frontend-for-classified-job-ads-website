import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {Advertisement} from "../../model/advertisement";
import {Company} from "../../model/company";
import {Search} from "../../model/search";
import {User} from "../../model/user";
import {AdvertisementService} from "../../service/advertisement.service";
import {SearchService} from "../../service/search.service";

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {

  advertisement: Advertisement = new Advertisement();
  submitted = false;
  company: Company;
  search: Search;
  user: User;

  constructor(private formBuilder: FormBuilder,
              private advertismentService: AdvertisementService,
              private searchService: SearchService,
              private router: Router) {
  }

  onSubmit() {
    this.save();
  }

  ngOnInit() {
    this.reloadData();
  }

  newAdvertisement(): void {
    this.submitted = false;
    this.advertisement = new Advertisement();
  }

  save() {
    this.advertismentService.createAdvertisement(this.company.nip, this.advertisement)
      .subscribe(
        data => {
          console.log(data);
          sessionStorage.setItem('newadd', JSON.stringify(data));
          this.submitted = true;
        },
        error => console.log(error));
    this.advertisement = new Advertisement();
  }

  reloadData() {
    this.company = JSON.parse(sessionStorage.getItem('newcom'));
    this.user = JSON.parse(sessionStorage.getItem('newuser'));
  }

  newSurvey() {
    this.router.navigate(['survey-create'])
  }

  Goto() {
    this.router.navigate(['company'])
  }

}


