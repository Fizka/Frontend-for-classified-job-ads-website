import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost:8080/api/courses';

  constructor(private http: HttpClient) {}

  getCourses(idCourses : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idCourses}`);
  }

  createCourses(idCustomer: number, courses: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/{idCustomer}`, courses);
  }
  updateCourses(idCourses: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${idCourses}`, value);
  }

  deleteCourses(idCourses: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idCourses}`);
  }

  getAllCourses(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
