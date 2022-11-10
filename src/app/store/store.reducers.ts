import { createReducer, on } from '@ngrx/store';
import { logIn, logOut } from './store.actions';
import {AuthState, ConnecticationStore} from './connectication-store.interface';

const authReducerState: AuthState = {
  isLogged: false,
  userId: null,
};

export const authReducer = createReducer(
  authReducerState,
  on(
    logIn,
    (state, {userId}) => ({ ...state, isLogged: true, userId })
  ),
  on(
    logOut,
    (state) => ({ ...state, isLogged: false })
  ),
);
