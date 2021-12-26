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
    private financialModelService: FinancialModelService
  ) {}

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.authService.getUser().subscribe(resp => {
        if(resp.data){
          this.user = resp.data
          // this.calculateTotals();

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



}
