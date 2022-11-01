import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss']
})
export class CreateAccountFormComponent implements OnInit {
  profileForm = new UntypedFormGroup({
    username: new UntypedFormControl(''),
    password:  new UntypedFormControl(''),
    firstName: new UntypedFormControl(''),
    lastName: new UntypedFormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(): void{
    const profileData = this.profileForm.value.email.domain;

  }

}
