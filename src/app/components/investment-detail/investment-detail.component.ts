import { Component, Input, OnInit } from '@angular/core';
import { Investment } from 'src/app/interfaces/interfaces';
import { UserDataService } from 'src/app/services/events/user-data-event/user-data.service';

@Component({
  selector: 'app-investment-detail',
  templateUrl: './investment-detail.component.html',
  styleUrls: ['./investment-detail.component.css']
})
export class InvestmentDetailComponent implements OnInit {

  logContext: string = 'USER INVESTMENTS COMPONENT'

  @Input() investments: Investment[]

  @Input() totalProfit: number 
  @Input() currentPriceTotal: number
  @Input() marketValue: number
  @Input() showCrypto: boolean
  

  constructor(
    private userDataEventService: UserDataService
  ) { }

  ngOnInit(): void {
   
  }

}
