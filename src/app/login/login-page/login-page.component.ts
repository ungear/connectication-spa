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
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void{
    if (this.username && this.password) {
      this.loginService.loginUser(this.username, this.password)
        .subscribe(x => console.log(x));
    }
  }
}
