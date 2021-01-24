import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApplictionService {

  private baseUrl = 'http://localhost:8080/api/applications';

  constructor(private http: HttpClient) {}

  getAppliction(idApplication : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idApplication}`);
  }

  createAppliction(idCustomer : number, NIP : number, idAdvertisement : number,  application: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${idCustomer}/${NIP}/${idAdvertisement}`, application);
  }

  getApplicationByIdCustomer(idCustomer : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/find/${idCustomer}`);
  }

  updateAppliction(idApplication: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${idApplication}`, value);
  }

  deleteAppliction(idApplication: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idApplication}`);
  }

  getApplictionList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
