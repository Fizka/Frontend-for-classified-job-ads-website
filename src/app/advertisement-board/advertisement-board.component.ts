import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../user";
import {Advertisement} from "../advertisement";
import {UserService} from "../user.service";
import {AdvertisementService} from "../advertisement.service";

@Component({
  selector: 'app-advertisement-board',
  templateUrl: './advertisement-board.component.html',
  styleUrls: ['./advertisement-board.component.css']
})
export class AdvertisementBoardComponent implements OnInit {

  advertisement: Observable<Advertisement[]>;

  constructor(private advertisementService: AdvertisementService) { }

  ngOnInit() {
    this.reloadData();
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

}
