import {UserProfile} from './userProfile.interface';

export interface User {
  id: number;
  username: string;
  profile: UserProfile;
}
