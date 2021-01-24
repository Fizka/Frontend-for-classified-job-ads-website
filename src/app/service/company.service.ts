import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'http://localhost:8080/api/companies';

  constructor(private http: HttpClient) {}

  getCompany(nip : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${nip}`);
  }

  getCompanyByIdUser(idUser : number): Observable<any> {
  return this.http.get(`${this.baseUrl}/find/${idUser}`);
}

  createCompany( idUser : number, company: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/lok/${idUser}`, company);
  }
  updateCompany(nip: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${nip}`, value);
  }

  deleteCompany(nip: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${nip}`);
  }

  getCompaniesList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
