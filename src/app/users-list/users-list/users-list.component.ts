import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserService} from '../../shared/user.service';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../../shared/types/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  isLoading = false;
  users: Observable<User[] | null> | null = null;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.users = this.userService.getAllUsers()
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
