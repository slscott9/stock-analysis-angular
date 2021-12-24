import { UserDataService } from './../../services/events/user-data-event/user-data.service';
import { logInfo } from './../../logger/logger';
import { Component, Input, OnInit } from '@angular/core';
import { User, Investment } from 'src/app/interfaces/interfaces';
import { UserInvestmentsService } from 'src/app/services/user-investments/user-investments.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  logContext: string = 'CRYPTO COMPONENT'

  @Input() user: User

  investments: Investment[] = []

  constructor(
    private userInvestmentsService: UserInvestmentsService,
    private userDataEventService : UserDataService

  ) { }

  ngOnInit(): void {
    
  
  }

  ngOnChanges() {
    logInfo('ngOnit() - user', this.logContext, this.user)
    this.getUserInvestments();

  }

  getUserInvestments() {
    this.userInvestmentsService.getAllInvestments(
      this.user.userId, 
      'https://scottsl.com/api/crypto'
    ).subscribe(resp => {

      logInfo('getUserInvestments() - resp', this.logContext, resp)
      if (resp.investments) {
        this.investments = resp.investments
      }
    })
  }

}
