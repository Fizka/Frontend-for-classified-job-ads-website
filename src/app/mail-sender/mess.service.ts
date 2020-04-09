import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {mess} from "./mess";

@Injectable({
  providedIn: 'root'
})
export class MessService {

  private baseUrl = 'http://localhost:8080/api/mail';

  constructor(private http: HttpClient) { }

  sendMessage(mess : mess): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


}
