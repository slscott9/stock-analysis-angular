import { User } from './../../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthEventService {

  authenticatedEvent = new Subject<User>();

  logoutEvent = new Subject<any>()

  constructor() { }

  emitAuthenticatedEvent(event: User) {
    this.authenticatedEvent.next(event)
  }

  emitLogoutEvent(event) {
    this.logoutEvent.next(event)
  }}
