import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { User } from "src/app/interfaces/interfaces";
import { logInfo } from "src/app/logger/logger";


@Injectable({
  providedIn: 'root'
})
export class AuthEventService {

  authenticatedEvent = new BehaviorSubject<any>({});

  logoutEvent = new Subject<any>()

  constructor() { }

  emitAuthenticatedEvent(event: User) {
    logInfo('emitAuthEvent() - event', 'AUTH EVENT SERVICE', event)
    this.authenticatedEvent.next(event)
  }

  emitLogoutEvent(event) {
    this.logoutEvent.next(event)
  }
}
