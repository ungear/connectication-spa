import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken: string | null = null;
  private readonly localStorageKeyForToken = 'CONNECTICATION_JWT';
  constructor() {
    // TODO: inject localstorage to fix SSR
    const tokenFromStorage = localStorage.getItem(this.localStorageKeyForToken);
    if (tokenFromStorage){
      this.accessToken = tokenFromStorage;
    }
  }

  setAccessToken(token: string): void{
    this.accessToken = token;
    localStorage.setItem(this.localStorageKeyForToken, token);
  }

  getAccessToken(): string | null{
    return this.accessToken;
  }
}
