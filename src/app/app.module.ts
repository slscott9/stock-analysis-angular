import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { UserHomeComponent } from './components/home-page/user-home/user-home.component';
import { AuthInterceptor } from './interceptor/interceptor';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { StockComponent } from './components/stock/stock.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { UserInvestmentsComponent } from './components/user-investments/user-investments.component';
import { NavBarComponent } from './components/home-page/nav-bar/nav-bar.component';
import { HomeInvestmentsComponent } from './components/home-page/home-investments/home-investments.component';
import { CommonModule } from '@angular/common';
import { InvestmentInfoComponent } from './components/home-page/investment-info/investment-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    SideBarComponent,
    StockComponent,
    CryptoComponent,
    UserInvestmentsComponent,
    NavBarComponent,
    HomeInvestmentsComponent,
    InvestmentInfoComponent
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
