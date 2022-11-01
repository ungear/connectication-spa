import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss']
})
export class CreateAccountFormComponent implements OnInit {
  profileForm = new FormGroup({
    username: new FormControl(''),
    password:  new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(): void{
    const profileData = this.profileForm.value.email.domain;

  }

}
