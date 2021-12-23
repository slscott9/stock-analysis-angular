import { AuthService } from './../../../services/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  user: User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // this.authService.logout()

    // if (this.authService.isLoggedIn()) {
    //   console.log('IS LOGGED IN')
    //   this.authService.getUser().subscribe(resp => {
    //     if (resp.data) {
    //       this.user = resp.data
    //       // this.componentState.showUserHome = true
    //       // logInfo('logged in resp', this.logContext, this.user)

    //     }
    //   })
    // } else {
    //   this.router.navigateByUrl('/login')
    // }
  }

}
