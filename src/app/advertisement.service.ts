import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AdvertisementService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/advertisement';

  getAllAdvertisements(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getAdvertisement(idAdvertisement : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idAdvertisement}`);
  }

  createAdvertisement(advertisement: any): Observable<any> {
    return this.http.post(this.baseUrl, advertisement);
  }

  deleteAdvertisment(idAdvertisement: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idAdvertisement}`);
  }

  deleteAllAdvertisements(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  updateAdvertisement(idAdvertisement: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${idAdvertisement}`, value);
  }
}
