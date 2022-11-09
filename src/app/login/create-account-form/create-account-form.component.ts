import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {CreateAccountForm} from '../../types/createAccountForm.interface';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss']
})
export class CreateAccountFormComponent implements OnInit {
  profileForm = new FormGroup({
    username: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    password:  new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    firstName: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    lastName: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
  });
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void{
    const profileData = this.profileForm.getRawValue();
    this.loginService.createAccount(profileData).subscribe(() => {});
  }

}
