import {createAction, props} from '@ngrx/store';

export const currentUserGet = createAction('[Auth] Get Current User Profile');
export const currentUserSuccess = createAction('[Auth] Current User Profile Received', props<{userId: number}>());
export const currentUserNotAuthorized = createAction('[Auth] Current User Not Authorized');
// export const currentUserGet = createAction('[Auth] Log Out');
