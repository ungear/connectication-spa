import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken: string | null = null;
  constructor() { }
}
