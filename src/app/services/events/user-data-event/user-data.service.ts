import { Investment } from './../../../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userCryptoEvent = new BehaviorSubject<any>([]);
  userStockEvent = new BehaviorSubject<any>([]);


  constructor() { }

  emitUserCryptoEvent(event: Investment[]) {
    this.userCryptoEvent.next(event)
  }

  emitUserStockEvent(event: Investment[]) {
    this.userCryptoEvent.next(event)
  }
}
