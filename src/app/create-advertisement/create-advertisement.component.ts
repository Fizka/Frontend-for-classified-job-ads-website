import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {Advertisement} from "../advertisement";
import {AdvertisementService} from "../advertisement.service";

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {

  advertisement: Advertisement = new Advertisement();
  submitted = false;

  constructor(private advertismentService : AdvertisementService) { }

  ngOnInit() {
  }

  newAdvertisement(): void {
    this.submitted = false;
    this.advertisement = new Advertisement();
  }

  save() {
    this.advertismentService.createAdvertisement(this.advertisement)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.advertisement = new Advertisement();
  }

  onSubmit() {
    this.save();
  }

}
