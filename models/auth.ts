export interface IAuth {
  _token: string;
  id: string;
  email: string;
  emailVerified: boolean;
  firebaseUser?: any;
  clientInitialized: boolean;
  signOut: () => void;
  serialize: () => string;
  getIdToken: () => Promise<string>;
}
