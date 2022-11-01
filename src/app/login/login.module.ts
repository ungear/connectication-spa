import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import {LoginRoutingModule} from './login-routing.module';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    CreateAccountFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
