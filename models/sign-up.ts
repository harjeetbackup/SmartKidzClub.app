export interface ISignUp extends IAccess {
  password: string;
  emailCnf?: string;
  passwordCnf?: string;
  agreement: boolean;
}

export interface IAccess {
  class_code: string;
  email: string;
}
