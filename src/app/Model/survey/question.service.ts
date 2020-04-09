import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private baseUrl = 'http://localhost:8080/api/questions';

  constructor(private http: HttpClient) {}

  getQuestion(idQuestion : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idQuestion}`);
  }

  createQuestion(idSearch: number, user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${idSearch}`, user);
  }
  updateQuestion(idQuestion: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${idQuestion}`, value);
  }

  deleteQuestion(idQuestion: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idQuestion}`);
  }

  getQuestionList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteAllQuestion(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
