export interface ISignUp extends IAccess {
  password: string;
  passwordCnf?: string;
  agreement: boolean;
}

export interface IAccess {
  class_code: string;
  email: string;
}
