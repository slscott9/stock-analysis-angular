import { User } from './../../interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  @Input() user: User

  constructor() { }

  ngOnInit(): void {
  }

}
