import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interfaces';
import { logInfo } from 'src/app/logger/logger';
import { AuthEventService } from 'src/app/services/events/auth-event.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  logContext: string = 'NAV BAR COMPONENT'

  @Input() user: User

  constructor(
    private authEventService: AuthEventService
  ) { }

  ngOnInit(): void {

  }

}
