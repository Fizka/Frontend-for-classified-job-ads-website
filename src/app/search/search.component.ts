import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CV} from "../Model/documentation/cv";
import {Search} from "../Model/advertisement/search";
import {SearchService} from "../Model/advertisement/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  search: Observable<Search[]>;

  constructor(private searchService : SearchService) { }

  ngOnInit() {
    this.reloadData()
  }

  reloadData() {
    this.search = this.searchService.getSearchList();
  }

  searchStarzysta(){

  }
  /*
  var checkbox = document.getElementById("chbx");

  function checkbox_changed() {
    if (checkbox.checked == true) {
      alert("Checked!");
    } else {
      alert("UnChecked!");
    }
  } */
  searchPrawo(){}

  searchIT(){}

  searchSpecjalista(){}

  searchBudownictwo(){}

  searchFinanse(){}

}
