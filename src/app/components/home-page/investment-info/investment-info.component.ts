import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { User } from 'src/app/interfaces/interfaces';
import { CoinmarketService } from 'src/app/services/coinmarket/coinmarket.service';
import { FinancialModelService } from 'src/app/services/financial-model/financial-model.service';

@Component({
  selector: 'app-investment-info',
  templateUrl: './investment-info.component.html',
  styleUrls: ['./investment-info.component.css']
})
export class InvestmentInfoComponent implements OnInit {

  logContext: string = 'INVESTMENT INFO COMPONENT'

  @Input() user: User
  userInvestments: boolean = false



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
