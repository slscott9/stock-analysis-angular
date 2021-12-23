import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions: any

  redirectURL: string

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    }
  }

  register(email: string, password: string, userName: string, firstName: string, lastName: string, selectedCurrency: string): Observable<any> {
    return this.http.post(
      'https://scottsl.com/api/auth/register',
      {
        email: email,
        password: password,
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        selectedCurrency: selectedCurrency
      },
      this.httpOptions
    )
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      'https://scottsl.com/api/auth/login',
      {
        email: email,
        password: password
      },
      this.httpOptions
    )
  }

  getUser(): Observable<any> {
    return this.http.get(
      'https://scottsl.com/api/auth/user',
      this.httpOptions
    )
  }

  setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'day');
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }}
