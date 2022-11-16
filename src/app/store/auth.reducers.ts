import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState } from './connectication-store.interface';

const initialState: AuthState = {
  isInProgress: false,
  isLogged: false,
  userId: null,
};

export const authReducer = createReducer(
  initialState,
  on(
    AuthActions.currentUserGet,
    (state) => ({ ...state, isInProgress: true })
  ),
  on(
    AuthActions.currentUserSuccess,
    (state, {userId}) => ({ ...state, isLogged: true, isInProgress: false, userId })
  ),
  on(
    AuthActions.currentUserNotAuthorized,
    (state) => ({ ...state, isLogged: false, isInProgress: false, })
  ),
);