import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext, StateToken} from '@ngxs/store';
import {UserService} from '../shared/user.service';
import {tap} from 'rxjs/operators';
import {AuthState} from '../store/connectication-store.interface';

export class GetCurrentUser {
  static readonly type = '[Auth] Get Current User Profile';
}

export const AUTH_STATE_TOKEN = new StateToken<AuthState>('authState');

@State<AuthState>({
  name: AUTH_STATE_TOKEN,
  defaults: {
    isInProgress: false,
    isLogged: false,
    userId: null,
  }
})
@Injectable()
export class AuthStateEngine {
  constructor(private userService: UserService){}

  @Selector([AUTH_STATE_TOKEN])
  static isLoggedIn(state: AuthState): boolean {
    return state.isLogged;
  }

  @Action(GetCurrentUser)
  getCurrentUser(ctx: StateContext<AuthState>, action: GetCurrentUser): any {
    ctx.patchState({
      isInProgress: true
    });
    return this.userService.getCurrentUserProfile().pipe(
      tap(response => {
        ctx.patchState({
          userId: response.id,
          isInProgress: false
        });
      })
    );
  }
}
