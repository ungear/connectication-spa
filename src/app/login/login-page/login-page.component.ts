import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../shared/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username: string | null = null;
  password: string | null = null;
  message: string | null = null;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void{
    if (this.username && this.password) {
      this.message = null;
      this.loginService.loginUser(this.username, this.password)
        .subscribe(this.onLoginSuccess.bind(this), this.onLoginFail.bind(this));
    }
  }

  onLoginSuccess(): void{
    this.message = 'Login success';
  }

  onLoginFail(): void {
    this.message = 'Login failed.Try again';
  }
}
