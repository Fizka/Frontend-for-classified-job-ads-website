import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080//api/customers';

  constructor(private http: HttpClient) {}

  getCustomer(idCustomer : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idCustomer}`);
  }

  getCustomerByidUser(idUser : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/find/${idUser}`);
  }

  createCustomer(idUser : number, customer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${idUser}`, customer);
  }

  updateCustomer(idCustomer: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${idCustomer}`, value);
  }

  deleteCustomer(idCustomer: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idCustomer}`);
  }

  getCustomersList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteAllCustomers(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
