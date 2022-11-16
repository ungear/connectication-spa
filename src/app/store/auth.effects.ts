
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {map, catchError, switchMap} from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import {UserService} from '../shared/user.service';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
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

}
