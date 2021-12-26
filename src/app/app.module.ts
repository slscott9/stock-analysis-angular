import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { AuthInterceptor } from './interceptor/interceptor';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { StockComponent } from './components/stock/stock.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { NavBarComponent } from './components/home/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { InvestmentDetailComponent } from './components/investment-detail/investment-detail.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { HomeInvestmentInfoComponent } from './components/home/home-investment-info/home-investment-info.component';
import { InvestmentTotalsComponent } from './components/home/investment-totals/investment-totals.component';
import { InvestmentsComponent } from './components/home/investments/investments.component';
import { StockDetailComponent } from './components/stock-detail/stock-detail.component';
import { CryptoDetailComponent } from './components/crypto-detail/crypto-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SideBarComponent,
    StockComponent,
    CryptoComponent,
    NavBarComponent,
    InvestmentDetailComponent,
    HomePageComponent,
    HomeInvestmentInfoComponent,
    InvestmentTotalsComponent,
    InvestmentsComponent,
    StockDetailComponent,
    CryptoDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
