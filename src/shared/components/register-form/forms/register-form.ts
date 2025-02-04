import { RegisterFormData } from '@shared/components/register-form/schemas/validation-register-form'

export enum RegisterFormFields {
  Email = 'email',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
}

export const registerForm: RegisterFormData = {
  email: '',
  password: '',
  confirmPassword: '',
}
