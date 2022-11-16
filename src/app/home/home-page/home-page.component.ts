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
  currentUserProfile: Observable<UserProfile | null> | null = null;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.currentUserProfile = this.userService.getCurrentUserProfile()
      .pipe(
        tap(() => this.isLoading = false),
        catchError(this.onCurrentUserLoadingFail.bind(this))
      );
  }

  onCurrentUserLoadingFail(err: any): Observable<null>{
    console.log('fail');
    return of(null);
  }

}
