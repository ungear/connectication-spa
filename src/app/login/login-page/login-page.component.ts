import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Store} from '@ngrx/store';
import {ConnecticationStore} from '../../store/connectication-store.interface';
import {currentUserGet} from '../../store/auth.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username: string | null = null;
  password: string | null = null;
  message: string | null = null;
  constructor(
    private loginService: LoginService,
    private store: Store<ConnecticationStore>,
    private router: Router
  ) { }

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
    this.store.dispatch(currentUserGet());
    this.router.navigateByUrl('/');
  }

  onLoginFail(): void {
    this.message = 'Login failed.Try again';
  }
}
