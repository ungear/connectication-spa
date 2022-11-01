import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {UserProfile} from '../../shared/types/userProfile.interface';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  isLoading = false;
  userProfiles: Observable<UserProfile[] | null> | null = null;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.userProfiles = this.userService.getAllUserProfiles()
      .pipe(
        tap(() => this.isLoading = false),
        catchError(this.onProfilesLoadingFail.bind(this))
      );
  }

  onProfilesLoadingFail(err: any): Observable<null>{
    console.log('fail');
    return of(null);
  }

}
