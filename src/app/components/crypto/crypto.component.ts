import { UserDataService } from './../../services/events/user-data-event/user-data.service';
import { logInfo } from './../../logger/logger';
import { Component, Input, OnInit } from '@angular/core';
import { User, Investment } from 'src/app/interfaces/interfaces';
import { UserInvestmentsService } from 'src/app/services/user-investments/user-investments.service';
import { CoinmarketService } from 'src/app/services/coinmarket/coinmarket.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  logContext: string = 'CRYPTO COMPONENT'

  @Input() user: User
  @Input() userInvestments: boolean

  investments: Investment[] = []

  currentPriceMap = new Map<string, number>()


  constructor(
    private userInvestmentsService: UserInvestmentsService,
    private coinMarketService: CoinmarketService

  ) { }

  ngOnInit(): void {
    
  
  }

  ngOnChanges() {
    this.getUserInvestments();

    // this.getCurrentPrices();



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

  getCurrentPrices() {
    this.coinMarketService.getCurrentPrices(this.user.userId, 600000, true).subscribe(resp => {
      if (resp) {
        this.setCurrentPriceMap(resp.currentPrices);
        this.setCurrentPrices();
      }
    })
  }


   //3
   setCurrentPriceMap(currentPrices: any[]) {
    for (let price of currentPrices) {
      this.currentPriceMap.set(price.tickerSymbol, +price.price)
    }
  }

  //4
  setCurrentPrices() {
    for (let investment of this.investments) {
      investment.currentPrice = this.currentPriceMap.get(investment.tickerSymbol)
      investment.priceDiff = this.currentPriceMap.get(investment.tickerSymbol) - investment.initialPPS
    }
  }

}
