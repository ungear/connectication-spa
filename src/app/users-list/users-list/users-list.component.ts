import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserProfile} from '../../shared/types/userProfile.interface';
import {UserService} from '../../shared/user.service';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
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
