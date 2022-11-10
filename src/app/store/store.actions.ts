import {createAction, props} from '@ngrx/store';

export const logIn = createAction('[Auth] Log In', props<{userId: number}>());
export const logOut = createAction('[Auth] Log Out');
