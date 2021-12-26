import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-investment-totals',
  templateUrl: './investment-totals.component.html',
  styleUrls: ['./investment-totals.component.css']
})
export class InvestmentTotalsComponent implements OnInit {

  logContext: string = 'INVESTMENT TOTALS COMPONENT'

  @Input() user: User


  //totals
  @Input() totalProfit: number = 0;
  @Input() currentPriceTotal: number = 0

  //stock
  @Input() stockProfit: number = 0
  @Input() stockInvestment: number = 0
  @Input() stockCurrentPriceTotal: number = 0


  //crypto
  @Input() cryptoProfit: number = 0
  @Input() cryptoInvestment: number = 0
  @Input() cryptoCurrentPriceTotal: number = 0
  

  constructor() { }

  ngOnInit(): void {
  }

}
