export interface ConnecticationStore {
  auth: AuthState;
}

export interface AuthState{
  isLogged: boolean;
  userId: number | null;
}
