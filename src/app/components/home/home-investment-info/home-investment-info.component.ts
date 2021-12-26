import { Component, Input, OnInit } from '@angular/core';
import { Investment, User } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home-investment-info',
  templateUrl: './home-investment-info.component.html',
  styleUrls: ['./home-investment-info.component.css']
})
export class HomeInvestmentInfoComponent implements OnInit {

  logContext: string = 'HOME INVESTMENT INFO COMPONENT'


  @Input() user: User
  
  //pass to investments
  @Input() stockInvestments: Investment[]
  @Input() cryptoInvestments: Investment[]


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
