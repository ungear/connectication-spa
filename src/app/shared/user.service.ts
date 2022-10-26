import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfile} from './types/userProfile.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUserProfiles(): Observable<UserProfile[]>{
    return this.http.get<UserProfile[]>('http://localhost:3000/user/all-profiles');
  }
}
