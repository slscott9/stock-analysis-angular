import { Component, Input, OnInit } from '@angular/core';
import { Investment, User } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  logContext: string = 'STOCK DETAIL COMPONENT'


  @Input() investments: Investment[]
  @Input() user: User



  constructor() { }

  ngOnInit(): void {
  }

}
