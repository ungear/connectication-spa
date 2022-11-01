import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {UserProfile} from '../../shared/types/userProfile.interface';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  isLoading = false;
  userProfiles: UserProfile[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getAllUserProfiles()
      .pipe(
        tap(() => this.isLoading = false)
      )
      .subscribe(this.onProfilesLoadingSuccess.bind(this), this.onProfilesLoadingFail.bind(this));
  }

  onProfilesLoadingSuccess(profiles: UserProfile[]): void{
    this.userProfiles = profiles;
  }

  onProfilesLoadingFail(): void{
    console.log('fail');
  }

}
