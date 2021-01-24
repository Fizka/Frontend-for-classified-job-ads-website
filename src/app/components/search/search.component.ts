import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Search} from "../../model/search";
import {SearchService} from "../../service/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  search: Observable<Search[]>;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.reloadData()
  }

  reloadData() {
    this.search = this.searchService.getSearchList();
  }

  searchStarzysta() {

  }

  searchPrawo() {
  }

  searchIT() {
  }

  searchSpecjalista() {
  }

  searchBudownictwo() {
  }

  searchFinanse() {
  }

}
