import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../shared/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwt = this.authService.getAccessToken();
    if (jwt) {
      const authHeaderValue = 'Bearer ' + jwt;
      return next.handle(request.clone({setHeaders: {Authorization: authHeaderValue}}));
    }
    return next.handle(request);
  }
}
