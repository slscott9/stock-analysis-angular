import { logInfo } from './../../../logger/logger';
import { AuthEventService } from './../../../services/events/auth-event.service';
import { ComponentState, User } from './../../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  logContext: string = 'LoginComponent'
  loginForm: FormGroup

  componentState: ComponentState = {
    showCrypto: false,
    showStocks: false,
    showUserHome: false,
    stockUrl: 'https://scottsl.com/api/stock',
    cryptoUrl: 'https://scottsl.com/api/crypto',
    showLogin: false,
    showRegister: false
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private authEventService: AuthEventService


  ) { 
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    },
      {
        validators: [this.emailValidator]
      }
    )
  }

  ngOnInit(): void {
    
  }

  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get('password');
  }

  showRegisterPage() {
    this.router.navigateByUrl('/register')
  }

  
  login() {
    if(this.loginForm.invalid){
      return
    }else if(this.validateInputs() === false) {
      return
    }

    this.authService.login(this.email.value, this.password.value).subscribe(resp => {
      if(resp.token){
        this.authService.setSession(
          {idToken: resp.token, expiresIn: '1'}
        )
        this.authEventService.emitAuthenticatedEvent(resp.user)
        this.router.navigateByUrl('')

      }
    })
  }

  emailValidator: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
    const email = control.get('email');
    if (email?.value !== '') {
      let emailvalid = this.emailValidation(email)
      if ((emailvalid) === false) {
        email?.setErrors({ invalid: true });
        return null;
      }
      if ((emailvalid) === true) {
        email?.setErrors(null);
        return null;
      }
    }
    return null;
  };

  emailValidation(email: any) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  }

  validateInputs() : boolean {
    if(this.email.value === '' || this.password.value === ''){
      return false
    }else {
      return true
    }
  }

}
