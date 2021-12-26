import { Component, Input, OnInit } from '@angular/core';
import { Investment } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  logContext: string = 'INVESTMENTS COMPONENT'


  @Input() investments: Investment[]

  constructor() { }

  ngOnInit(): void {
  }

}
