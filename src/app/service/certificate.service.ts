import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  private baseUrl = 'http://localhost:8080/api/certificate';

  constructor(private http: HttpClient) {}

  getCertificate(idCertificate : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idCertificate}`);
  }

  createCertificate(idCustomer: number, certificate: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/{idCustomer}`, certificate);
  }
  updateCertificate(idCertificate: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${idCertificate}`, value);
  }

  deleteCertificate(idCertificate: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idCertificate}`);
  }

  getCertificateList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
