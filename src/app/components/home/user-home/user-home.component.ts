import { logInfo } from './../../../logger/logger';
import { AuthEventService } from 'src/app/services/events/auth-event.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  logContext: string = 'USER HOME COMPONENT'

  user: User;

  constructor(
    private authService: AuthService,
    private authEventService: AuthEventService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    if(this.authService.isLoggedIn()){
      this.authService.getUser().subscribe(resp => {
        if(resp.data){
          this.user = resp.data

          logInfo('ngOnInit() - user from response', this.logContext, this.user)
        }
      }) 
    }

    this.authEventService.authenticatedEvent.subscribe(event => {      
      this.user = event
    })


  }

 



}
