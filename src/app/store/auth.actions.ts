import {createAction, props} from '@ngrx/store';
import {UserProfile} from '../shared/types/userProfile.interface';

export const currentUserGet = createAction('[Auth] Get Current User Profile');
export const currentUserSuccess = createAction('[Auth] Current User Profile Received', props<{userId: number, userProfile: UserProfile}>());
export const currentUserNotAuthorized = createAction('[Auth] Current User Not Authorized');
export const signOut = createAction('[Auth] Sign Out');
// export const currentUserGet = createAction('[Auth] Log Out');
