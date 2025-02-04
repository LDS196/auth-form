import { LoginFormData } from '@shared/components/login-form/schemas/validation-login-form'

export enum LoginFormFields {
  Email = 'email',
  Password = 'password',
}

export const loginForm: LoginFormData = {
  email: '',
  password: '',
}
