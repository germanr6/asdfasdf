import { AuthRequest, AuthUser } from './auth.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  signUp(request: AuthRequest): Observable<object> {
    return this.http.post('/auth/signup', request);
  }

  signIn(request: AuthRequest) {
    return this.http.post<any>('/auth/signin', request).pipe(
      map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      })
    );
  }

  signOut() {
    localStorage.removeItem('currentUser');
  }

  getUser(): AuthUser {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
