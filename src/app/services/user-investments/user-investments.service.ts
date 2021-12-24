import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investment } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserInvestmentsService {

  httpOptions: any;


  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',        
      })
    }
  }

  //https://scottsl.com/api/crypto
  //returns init investment after update
  updateInvestments(userId: number, investments: Investment[], isUpdate: boolean, url: string): Observable<any>{
    return this.http.post(
      `${url}/investments/update`,
      {
        isUpdate: isUpdate,
        investments: investments,
        userId: userId,
      },
      this.httpOptions
    )
  }

  //https://scottsl.com/api/crypto
  getAllInvestments(userId: number, url: string): Observable<any> {
    return this.http.post(
      `${url}/investments`,
      {
        userId: userId,
      },
      this.httpOptions
    )
  }


  //https://scottsl.com/api/crypto
  getInitInvestment(userId: number, url: string): Observable<any> {
    return this.http.post(
      `${url}/investment`,
      {
        userId: userId,
      },
      this.httpOptions
    )
  }}
