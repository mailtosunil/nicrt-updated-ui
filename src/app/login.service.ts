import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validateUser(username: string, password: string): Observable<boolean> {
    let loginUrl = 'http://localhost:8090/login/' + username + '/' + password;
    console.log("url: "+loginUrl);
    return this.http.get<boolean>(loginUrl);
  }
}
