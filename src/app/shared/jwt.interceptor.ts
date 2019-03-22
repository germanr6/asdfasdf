import { AuthUser } from './auth.model';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  currentUser: AuthUser;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser && this.currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.currentUser.token
        }
      });
    }
    return next.handle(request);
  }
}
