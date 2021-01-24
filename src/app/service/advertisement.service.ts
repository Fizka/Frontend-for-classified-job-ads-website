import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AdvertisementService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/api//advertisement';

  getAllAdvertisements(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getAdvertisement(idAdvertisement : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idAdvertisement}`);
  }

  findBySalary(salary : number): Observable<any> {
  return this.http.get(`${this.baseUrl}/findsalary/${salary}`);
}

  getAdvertisementBynip(nip : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/find/${nip}`);
  }

  findByCityAndIndustry(Industry : string, city : string): Observable<any> {
    return this.http.get(`${this.baseUrl}/findIndustrycity/${Industry}/${city}`);
  }

  findByCityAndSalary(city : string, salary : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/findcitysalary/${city}/${salary}`);
  }

  findByIndustryAndCityAndSalary(Industry : string, city : string, salary : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/findIndustrysalarycity/${Industry}/${salary}/${city}`);
  }

  findByIndustryAndSalary(Industry : string, salary : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/findIndustrysalary/${Industry}/${salary}`);
  }

  findByCity(city : string): Observable<any> {
    return this.http.get(`${this.baseUrl}/findcity/${city}`);
  }

  findByIndustry(Industry : string): Observable<any> {
    return this.http.get(`${this.baseUrl}/findIndustry/${Industry}`);
  }

  createAdvertisement( nip : number, advertisement: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${nip}`, advertisement);
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
