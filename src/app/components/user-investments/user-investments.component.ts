import { UserDataService } from './../../services/events/user-data-event/user-data.service';
import { logInfo } from './../../logger/logger';
import { Component, Input, OnInit } from '@angular/core';
import { Investment } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-user-investments',
  templateUrl: './user-investments.component.html',
  styleUrls: ['./user-investments.component.css']
})
export class UserInvestmentsComponent implements OnInit {

  logContext: string = 'USER INVESTMENTS COMPONENT'

  @Input() investments: Investment[]
  

  constructor(
    private userDataEventService: UserDataService
  ) { }

  ngOnInit(): void {
    // this.userDataEventService.userCryptoEvent.subscribe(event => {
    //   logInfo('ngOninit() event', this.logContext, event)
    //   this.investments = event
    // })
  }

}
