import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeState } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NavBarEventService {

  logContext: string = 'NAV BAR EVENT SERVICE'

  navBarEvent = new BehaviorSubject<any>({})

  constructor() { }

  emitNavBarEvent(event: HomeState) {
    this.navBarEvent.next(event)
  }
}
