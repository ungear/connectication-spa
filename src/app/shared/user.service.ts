import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private accessToken: string | null = null;
  constructor() { }

  setAccessToken(token: string){
    this.accessToken = token;
  }
}
