import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of, Subject} from 'rxjs';
import {UserService} from '../../shared/user.service';
import {catchError, filter, map, tap, withLatestFrom} from 'rxjs/operators';
import {User} from '../../shared/types/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  isLoading = false;
  usersSource$: Observable<User[] | null> | null = null;
  visibleUsers$: Observable<User[] | null> | null = null;
  constructor(private userService: UserService) { }
  userSearch$ = new BehaviorSubject('');
  userSearch = '';

  ngOnInit(): void {
    this.isLoading = true;
    this.usersSource$ = this.userService.getAllUsers()
      .pipe(
        tap(() => this.isLoading = false),
        catchError(this.onProfilesLoadingFail.bind(this))
      );

    this.visibleUsers$ = combineLatest([this.usersSource$, this.userSearch$]).pipe(
      filter(([users, search]) => !!users),
      map(([users, search]) => {
        return users!.filter(x => x.profile.firstName.includes(search) || x.profile.lastName.includes(search));
      })
    ) ;
  }

  onProfilesLoadingFail(err: any): Observable<null>{
    console.log('fail');
    return of(null);
  }

  onUserSearchUpdated(term: string): void{
    this.userSearch = term;
    this.userSearch$.next(term);
  }

}
