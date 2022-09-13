import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService {
  loggedIn = false;

  isAuthenticate() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn());
      }, 600);
    });
    return promise;
  }

  //=======================================
  constructor(private router: Router) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    if (sessionStorage.getItem('authToken') === 'asdasdasd') {
      return true;
    }
    if (this.getToken() === null) {
      return false;
    }
    this.loggedIn = true;
    return true;
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('token');
    sessionStorage.removeItem('authToken');
    this.router.navigate(['login']);
  }

  login(email: string, password: string, keepMeLoggedIn: boolean) {
    if (email === 'admin@gmail.com' && password === '123123') {
      this.loggedIn = true;
      if (keepMeLoggedIn) {
        this.setToken('authToken');
      }
      else {
        sessionStorage.setItem('authToken', 'asdasdasd');
      }
      return of({ name: 'Badal Das', email: 'badal.swami360@gmail.com' });
    }
    return throwError(new Error('Incorrect username or password'));

  }
}
