import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { User, HomeState, Investment } from 'src/app/interfaces/interfaces';
import { logInfo } from 'src/app/logger/logger';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { CoinmarketService } from 'src/app/services/coinmarket/coinmarket.service';
import { AuthEventService } from 'src/app/services/events/auth-event.service';
import { NavBarEventService } from 'src/app/services/events/nav-bar-event/nav-bar-event.service';
import { FinancialModelService } from 'src/app/services/financial-model/financial-model.service';
import { UserInvestmentsService } from 'src/app/services/user-investments/user-investments.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  logContext: string = 'HOME PAGE COMPONENT'

  user: User;

  totalProfit: number = 0
  currentPriceTotal: number = 0

  stockProfit: number = 0
  stockInvestment: number = 0
  stockCurrentPriceTotal: number = 0

  cryptoProfit: number = 0
  cryptoInvestment: number = 0
  cryptoCurrentPriceTotal: number = 0

  stockInvestments: Investment[]
  cryptoInvestments: Investment[]

  currentPriceMap = new Map<string, number>()


  homeState: HomeState = {
    showHome: true,
    showCryptoDetail: false,
    showStockDetail: false,

  }

  constructor(
    private authService: AuthService,
    private authEventService: AuthEventService,
    private navBarEventService: NavBarEventService,
    private coinMarketService: CoinmarketService,
    private financialModelService: FinancialModelService,
    private userInvestmentsService: UserInvestmentsService,

  ) {}

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.authService.getUser().subscribe(resp => {
        if(resp.data){
          this.user = resp.data
          // this.calculateTotals();

          this.getCryptoInvestments();
          this.getStockInvestments();

        }
      }) 
    }

    this.authEventService.authenticatedEvent.subscribe(event => {      
      this.user = event
    })

    this.navBarEventService.navBarEvent.subscribe(event => {
      this.homeState = event
    })
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


  getCryptoInvestments() {
    this.userInvestmentsService.getAllInvestments(
      this.user.userId, 
      'https://scottsl.com/api/crypto'
    ).subscribe(resp => {

      logInfo('getUserInvestments() - resp', this.logContext, resp)
      if (resp.investments) {
        this.cryptoInvestments = resp.investments
      }
    })
  }

  getCurrentCryptPrices() {
    this.coinMarketService.getCurrentPrices(this.user.userId, 600000, true).subscribe(resp => {
      if (resp) {
        this.setCurrentPriceMap(resp.currentPrices);
        this.cryptoInvestments = this.setCurrentPrices(this.cryptoInvestments);
      }
    })
  }

  getStockInvestments() {
    this.userInvestmentsService.getAllInvestments(
      this.user.userId,
      'https://scottsl.com/api/stock'
    ).subscribe(resp => {
      if (resp.investments) {
        this.stockInvestments = resp.investments
      }
    })
  }

  getCurrentStockPrices() {
    this.financialModelService.getCurrentPrices(this.user.userId, 600000, false).subscribe(resp => {
      if (resp) {
        this.setCurrentPriceMap(resp.currentPrices);
        this.stockInvestments = this.setCurrentPrices(this.stockInvestments);
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
  setCurrentPrices(investments: Investment[]): Investment[] {
    for (let investment of investments) {
      investment.currentPrice = this.currentPriceMap.get(investment.tickerSymbol)
      investment.priceDiff = this.currentPriceMap.get(investment.tickerSymbol) - investment.initialPPS
    }

    return investments
  }








}
