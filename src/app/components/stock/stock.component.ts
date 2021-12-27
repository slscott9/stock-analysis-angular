import { logInfo } from './../../logger/logger';
import { UserInvestmentsService } from './../../services/user-investments/user-investments.service';
import { User, Investment } from './../../interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { FinancialModelService } from 'src/app/services/financial-model/financial-model.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  logContext: string = 'STOCK COMPONENT'

  @Input() user: User
  @Input() investments: Investment[] = []

  // currentPriceMap = new Map<string, number>()


  constructor(
    private userInvestmentsService: UserInvestmentsService,
    private financialModelService: FinancialModelService
  ) {

  }

  ngOnInit(): void {


  }


  // ngOnChanges() {
  //   this.getUserInvestments();
  //   // this.getCurrentPrices();

  // }

  // getUserInvestments() {
  //   this.userInvestmentsService.getAllInvestments(
  //     this.user.userId,
  //     'https://scottsl.com/api/stock'
  //   ).subscribe(resp => {
  //     if (resp.investments) {
  //       this.investments = resp.investments
  //     }
  //   })
  // }

  // getCurrentPrices() {
  //   this.financialModelService.getCurrentPrices(this.user.userId, 600000, false).subscribe(resp => {
  //     if (resp) {
  //       this.setCurrentPriceMap(resp.currentPrices);
  //       this.setCurrentPrices();
  //     }
  //   })
  // }

  // //utility
  // setCurrentPriceMap(currentPrices: any[]) {
  //   for (let price of currentPrices) {
  //     this.currentPriceMap.set(price.tickerSymbol, +price.price)
  //   }
  // }

  // setCurrentPrices() {
  //   for (let investment of this.investments) {
  //     investment.currentPrice = this.currentPriceMap.get(investment.tickerSymbol)
  //     investment.priceDiff = this.currentPriceMap.get(investment.tickerSymbol) - investment.initialPPS
  //   }
  // }

}
