import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfile} from './types/userProfile.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUserProfiles(): Observable<UserProfile[]>{
    return this.http.get<UserProfile[]>('http://localhost:3000/user/all-profiles');
  }

  getCurrentUserProfile(): Observable<{userId: number, profile: UserProfile}>{
    return this.http.get<any>('http://localhost:3000/user/current').pipe(
      map(resp => {
        return resp;
      }));
  }
}
