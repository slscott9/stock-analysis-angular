import { Component, Input, OnInit } from '@angular/core';
import { Investment, User } from 'src/app/interfaces/interfaces';
import { logInfo } from 'src/app/logger/logger';

@Component({
  selector: 'app-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrls: ['./crypto-detail.component.css']
})
export class CryptoDetailComponent implements OnInit {

  logContext: string = 'CRYPTO DETAIL COMPONENT'

  @Input() investments: Investment[]
  @Input() user: User

  constructor() { }

  ngOnInit(): void {

    logInfo('USER from ngOnInit()', this.logContext, this.user)
    logInfo('INVESTMENTS from ngOnInit()', this.logContext, this.investments)
  }


  

  

}
