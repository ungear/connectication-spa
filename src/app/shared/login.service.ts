import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private accessToken: string | null = null;

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string): Observable<any>{
    return this.http
      // TODO get API domain from configs
      .post('http://localhost:3000/auth/login', { username, password}).pipe(
        tap((resp: any) => {
          if (resp.access_token) { this.accessToken = resp.access_token; }
        })
      );
  }
}

