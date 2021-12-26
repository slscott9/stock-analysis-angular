import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';
import { logInfo } from 'src/app/logger/logger';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { AuthEventService } from 'src/app/services/events/auth-event.service';
import { NavBarEventService } from 'src/app/services/events/nav-bar-event/nav-bar-event.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  logContext: string = 'NAV BAR COMPONENT'

  @Input() user: User

  constructor(
    private authEventService: AuthEventService,
    private authService: AuthService,
    private router: Router,
    private navBarEventService: NavBarEventService
  ) { }

  ngOnInit(): void {

    

  }

  emitNavbarEvent( showHome: boolean, showCryptoDetail: boolean, showStockDetail: boolean) {
    this.navBarEventService.emitNavBarEvent(
      {
        showCryptoDetail: showCryptoDetail,
        showStockDetail: showStockDetail,
        showHome: showHome
      }
    )
  }

  logout() {
    this.authService.logout()
    this.router.navigateByUrl('/login')
  }

}
