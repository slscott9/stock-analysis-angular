import { Component, Input, OnInit } from '@angular/core';
import { Investment } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrls: ['./crypto-detail.component.css']
})
export class CryptoDetailComponent implements OnInit {

  logContext: string = 'CRYPTO DETAIL COMPONENT'

  @Input() investments: Investment[]

  constructor() { }

  ngOnInit(): void {

  }

}
