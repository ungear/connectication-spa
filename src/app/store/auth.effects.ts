
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import {map, catchError, switchMap, tap} from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import {UserService} from '../shared/user.service';
import {AuthService} from '../shared/auth.service';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private authService: AuthService,
  ) {}

  getCurrentUserProfile = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.currentUserGet),
      switchMap(action => {
        return this.userService.getCurrentUserProfile().pipe(
          map(response => AuthActions.currentUserSuccess({userId: response.id})),
          catchError((error: any) => of(AuthActions.currentUserNotAuthorized()))
        );
      })
    )
  );

  signOut = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signOut),
      tap(action => {
        this.authService.signOut();
      })
    ),  {dispatch: false}
  );

}
