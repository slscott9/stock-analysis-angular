import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer, switchMap } from 'rxjs';
import { logInfo } from 'src/app/logger/logger';

@Injectable({
  providedIn: 'root'
})
export class FinancialModelService {

  logContext: string = 'FINANCIAL MODEL SERVICE'


  httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'

      })
    }
  }

  //https://scottsl.com/api/coinmarket/current/totals

  
  currentPriceTotals(userId: number, isCrypto: boolean): Observable<any> {
    return this.http.post(
      'https://scottsl.com/api/financial/current/totals',
      {
        userId: userId,
        isCrypto: isCrypto
      },      
      this.httpOptions
    )
  }

  getCurrentPrices(userId: number, interval: number, isCrypto: boolean): Observable<any> {
    /* 
        RxJs 
        https://rxjs.dev/guide/operators

        .pipe is called on the first observable (outer) and returns a new inner observable, and takes another observable as a param
        .switchMap - changes our observable (allows you to do work on it)

        observable1
          .pipe(observable2)


        .switchMap - each time switchMap observes an inner observable the output observable begins emmitting the items emitted by
        the inner observable
    */
  
        //https://scottsl.com/api/coinmarket/current
    return timer(0, interval)
      .pipe(
        switchMap(
          _ => this.http.post(
            'https://scottsl.com/api/financial/current',
            {
              userId: userId,
              isCrypto: isCrypto
            },
            this.httpOptions)
        )
      )
  }}
