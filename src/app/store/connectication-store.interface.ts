import {UserProfile} from '../shared/types/userProfile.interface';

export interface ConnecticationStore {
  auth: AuthState;
}

export interface AuthState {
  isInProgress: boolean;
  isLogged: boolean;
  userId: number | null;
  userProfile: UserProfile | null;
}
