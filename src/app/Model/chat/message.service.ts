import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  private baseUrl = 'http://localhost:8080/api/mail';

  constructor(private http: HttpClient) { }

  postFeedback(message: any): Observable<any> {
    return this.http.post(this.baseUrl, message);
  }

}
