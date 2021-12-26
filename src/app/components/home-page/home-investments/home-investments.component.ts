import { Component, Input, OnInit } from '@angular/core';
import { Investment } from 'src/app/interfaces/interfaces';
import { UserDataService } from 'src/app/services/events/user-data-event/user-data.service';

@Component({
  selector: 'app-home-investments',
  templateUrl: './home-investments.component.html',
  styleUrls: ['./home-investments.component.css']
})
export class HomeInvestmentsComponent implements OnInit {

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
