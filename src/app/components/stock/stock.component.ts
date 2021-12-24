import { LoginComponent } from './../authentication/login/login.component';
import { logInfo } from './../../logger/logger';
import { UserInvestmentsService } from './../../services/user-investments/user-investments.service';
import { User, Investment } from './../../interfaces/interfaces';
import { UserInvestmentsComponent } from './../user-investments/user-investments.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  logContext: string = 'STOCK COMPONENT'

  @Input() user: User

  investments: Investment[] = []

  constructor(
    private userInvestmentsService: UserInvestmentsService
  ) { 

  }

  ngOnInit(): void {
    

  }


  ngOnChanges() {
    logInfo('ngOnit() - user', this.logContext, this.user)
    this.getUserInvestments();

  }

  getUserInvestments() {
    this.userInvestmentsService.getAllInvestments(
      this.user.userId, 
      'https://scottsl.com/api/stock'
    ).subscribe(resp => {
      if (resp.investments) {
        this.investments = resp.investments

        logInfo('getUserInvestments() investments', this.logContext, this.investments)
      }
    })
  }

}
