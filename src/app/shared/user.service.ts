import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfile} from './types/userProfile.interface';
import {Observable} from 'rxjs';
import {User} from './types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/user/all').pipe(
      map(x => x.filter(u => !!u.profile))
    );
  }

  getCurrentUserProfile(): Observable<{userId: number, profile: UserProfile}>{
    return this.http.get<any>('http://localhost:3000/user/current').pipe(
      map(resp => {
        return resp;
      }));
  }

  getUserProfile(userId: number): Observable<UserProfile>{
    return this.http.get<UserProfile>(`http://localhost:3000/user/${userId}/profile`);
  }
}
