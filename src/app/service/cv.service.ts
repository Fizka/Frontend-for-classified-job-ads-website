import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CVService {

  private baseUrl = 'http://localhost:8080/api/cv';

  constructor(private http: HttpClient) {}

  getCV(idCV : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idCV}`);
  }

  createCV(idCustomer: number,cv: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${idCustomer}`, cv);
  }

  getCvByidCustomer(idCustomer : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/find/${idCustomer}`);
  }


  updateCV(idCV: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${idCV}`, value);
  }

  deleteCV(idCV: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idCV}`);
  }

  getCVList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
