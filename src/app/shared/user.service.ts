import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfile} from './types/userProfile.interface';
import {Observable} from 'rxjs';
import {User} from './types/user.interface';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl + '/user/all').pipe(
      map(x => x.filter(u => !!u.profile))
    );
  }

  getCurrentUserProfile(): Observable<{userId: number, profile: UserProfile}>{
    return this.http.get<any>(this.apiUrl + '/user/current').pipe(
      map(resp => {
        return resp;
      }));
  }

  getUserProfile(userId: number): Observable<UserProfile>{
    return this.http.get<UserProfile>(`${this.apiUrl}/user/${userId}/profile`);
  }
}
