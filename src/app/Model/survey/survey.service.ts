import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private baseUrl = 'http://localhost:8080/api/survey';

  constructor(private http: HttpClient) {}

  getSurvey(idSurvey : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idSurvey}`);
  }

  createSurvey(NIP: number, survey: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${NIP}`, survey);
  }

  updateSurvey(idSurvey: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${idSurvey}`, value);
  }

  deleteSurvey(idSurvey: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idSurvey}`);
  }

  getSurveyList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteAllSurvey(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
