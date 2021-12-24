import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentState } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { AuthEventService } from 'src/app/services/events/auth-event.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  logContext: string = 'RegisterComponent'
  registerForm: FormGroup;


  componentState: ComponentState = {
    showCrypto: false,
    showStocks: false,
    showUserHome: false,
    showLogin: false,
    stockUrl: 'https://scottsl.com/api/stock',
    cryptoUrl: 'https://scottsl.com/api/crypto',
    showRegister: false
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private authEventService: AuthEventService,
    private router: Router

  ) {
    this.registerForm = this.fb.group({
      email: [''],
      password: [''],
      confirmPassword: [''],
      userName: [''],
      firstName: [''],
      lastName: [''],
      selectedCurrency: [''],
    },
      {
        validators: [
          this.emailValidator,
          this.passwordValidator,
          this.firstNameValidator,
          this.lastNameValidator,
          this.userNameValidator,
          this.selectedCurrencyValidator
        ]

      }

    )
  }
  ngOnInit(): void {}

  get email() {
    return this.registerForm.get("email");
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  get userName() {
    return this.registerForm.get('userName')
  }
  get firstName() {
    return this.registerForm.get('firstName')
  }
  get lastName() {
    return this.registerForm.get('lastName')
  }
  get selectedCurrency() {
    return this.registerForm.get('selectedCurrency')
  }

  userNameValidator: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {

    const userName = control.get('userName');

    if(userName.touched) {
      if(userName.value === ''){
        userName.setErrors({invalid: true})
        return null
      }
    }
    
    return null;
  };

  firstNameValidator: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
    const firstName = control.get('firstName');

    if(firstName.touched){ 
      if(firstName.value === ''){
        firstName.setErrors({invalid: true})
        return null
      }
      
    }
    return null;
  };


  lastNameValidator: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
    const lastName = control.get('lastName');

    if(lastName.touched){
      if(lastName.value === ''){
        lastName.setErrors({invalid: true})
        return null
      }
    }
    
    return null;
  };


  selectedCurrencyValidator: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
    const selectedCurrency = control.get('selectedCurrency');

    if(selectedCurrency.touched){
      if(selectedCurrency.value === '') {
        selectedCurrency.setErrors({invalid: true})
        return null
      }
    }
    
    return null;
  };

  validateInputs() : boolean {
    if(
      this.email.value === '' || 
      this.password.value === '' ||
      this.confirmPassword.value === '' ||
      this.userName.value === '' ||
      this.firstName.value === '' ||
      this.lastName.value === '' ||
      this.selectedCurrency.value === ''
    ){
      return false;
    }else {
      return true
    }
  }


  register() {
    if (this.registerForm.invalid) {
      return
    }else if(this.validateInputs() === false){
      return
    }

    this.authService.register(
      this.email.value,
      this.password.value,
      this.userName.value,
      this.firstName.value,
      this.lastName.value,
      this.selectedCurrency.value
    ).subscribe(resp => {
      if (resp.token) {

        this.authService.setSession(
          { idToken: resp.token, expiresIn: '1' }
        )

        this.authEventService.emitAuthenticatedEvent(resp.user);
        this.router.navigateByUrl('')
      }
    })
  }



  showLoginPage() {
    this.router.navigateByUrl('/login')
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

  passwordValidator: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPasswordInput = control.get('confirmPassword');

    if(password.touched){
      if (confirmPasswordInput.value !== password.value) {
        confirmPasswordInput.setErrors({ noMatch: true });
        return null
      }
    }
    

    return null;
  };

  emailValidation(email: any) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  }

}
