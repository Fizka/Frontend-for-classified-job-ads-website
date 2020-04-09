import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = 'http://localhost:8080/api/search';

  constructor(private http: HttpClient) {}

  getSearch(idSearch : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idSearch}`);
  }

  createSearch(user: any): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }
  updateSearch(idSearch: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${idSearch}`, value);
  }

  getSearchbyIndustry(id : string) : Observable<any>{
    return this.http.get(`${this.baseUrl}/industry/{id}`);
  }

  deleteSearch(idSearch: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idSearch}`);
  }

  getSearchList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteAllSearch(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
