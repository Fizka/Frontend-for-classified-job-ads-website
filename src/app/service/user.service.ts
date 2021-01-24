import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

    getUser(idUser : number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${idUser}`);
  }

  getUserbylogin(login : string) : Observable<any>{
    return this.http.get(`${this.baseUrl}/login/${login}`);
  }

  getUserByusertype(usertype : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/usertype/${usertype}`);
  }

    createUser(user: any): Observable<any> {
      return this.http.post(this.baseUrl, user);
  }
    updateUser(idUser: number, value: any): Observable<any> {
      return this.http.put(`${this.baseUrl}/${idUser}`, value);
  }

  getUserBymail(mail : string): Observable<any>{
    return this.http.get(`${this.baseUrl}/mail/${mail}`)
  }
    deleteUser(idUser: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${idUser}`);
  }

    getUserList(): Observable<any> {
      return this.http.get(this.baseUrl);
  }



    deleteAll(): Observable<any> {
      return this.http.delete(this.baseUrl);
  }

}

