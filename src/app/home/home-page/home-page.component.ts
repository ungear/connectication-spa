import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {UserProfile} from '../../shared/types/userProfile.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUserProfiles()
      .subscribe(this.onProfilesLoadingSuccess.bind(this), this.onProfilesLoadingFail.bind(this));
  }

  onProfilesLoadingSuccess(profiles: UserProfile[]): void{
    console.log(profiles);
  }

  onProfilesLoadingFail(): void{
    console.log('fail');
  }

}
