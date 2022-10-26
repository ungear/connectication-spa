import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string): Observable<any>{
    return this.http.post('http://localhost:3000/auth/login', { username, password});
  }
}

