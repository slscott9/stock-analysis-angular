import { User } from './../../interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { CoinmarketService } from 'src/app/services/coinmarket/coinmarket.service';
import { FinancialModelService } from 'src/app/services/financial-model/financial-model.service';
import { logInfo } from 'src/app/logger/logger';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  logContext: string = 'INVESTMENTS COMPONENT'

  @Input() user: User

  totalProfit: number = 0;

  currentPriceTotal: number = 0

  //stock
  stockProfit: number = 0
  stockInvestment: number = 0
  stockCurrentPriceTotal: number = 0


  //crypto
  cryptoProfit: number = 0
  cryptoInvestment: number = 0
  cryptoCurrentPriceTotal: number = 0
  

  constructor(
    private coinMarketService: CoinmarketService,
    private financialModelService: FinancialModelService
  ) { }

  ngOnInit(): void {}

  ngOnChanges() {
  //  this.calculateTotals();
  }


  calculateTotals() {
    forkJoin(
      [this.coinMarketService.currentPriceTotals(this.user.userId, true), 
        this.financialModelService.currentPriceTotals(this.user.userId, false)]
    )
    .subscribe(responses => {
      this.cryptoCurrentPriceTotal = responses[0].currentPriceTotals
      this.stockCurrentPriceTotal = responses[1].currentPriceTotals

      this.cryptoProfit = this.cryptoCurrentPriceTotal - this.user.cryptoInitialInvestment
      this.stockProfit = this.stockCurrentPriceTotal - this.user.stockInitialInvestment

      this.currentPriceTotal = this.cryptoCurrentPriceTotal + this.stockCurrentPriceTotal

      this.totalProfit = this.cryptoProfit + this.stockProfit

    })
  }

}
