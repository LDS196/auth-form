'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Label } from '@shared/components/ui'

import { RegisterFormFields } from '@shared/components/register-form/forms/register-form'
import { Loader } from '@shared/components/ui/loader/loader'
import { Link } from '@/i18n/routing'
import { REGISTER_PAGE } from '@shared/constants/routes'
import {
  LoginFormData,
  schema,
} from '@shared/components/login-form/schemas/validation-login-form'
import { useLogin } from '@shared/api/hooks/use-login'
import { useTranslations } from 'next-intl'

export const LoginForm = () => {
  const t = useTranslations()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
  })
  const { mutateAsync: loginUser, isLoading } = useLogin()

  const handelLogin = async (data: LoginFormData) => {
    const userData = { email: data.email, password: data.password }
    await loginUser(userData)
  }

  return (
    <div className="pt-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
          {t('login.title')}
        </h1>
        {isLoading && <Loader />}
        <form
          onSubmit={handleSubmit(handelLogin)}
          className="flex flex-col space-y-6"
        >
          <div>
            <Label
              htmlFor={RegisterFormFields.Email}
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </Label>
            <Input
              placeholder={RegisterFormFields.Email}
              id={RegisterFormFields.Email}
              type="email"
              {...register(RegisterFormFields.Email)}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <Label
              htmlFor={RegisterFormFields.Password}
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </Label>
            <Input
              placeholder={RegisterFormFields.Password}
              id={RegisterFormFields.Password}
              type="password"
              {...register(RegisterFormFields.Password)}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <h1 className="text-m text-center text-gray-900 dark:text-gray-100">
            Don&#39;t have an account?
            <Link
              className="underline hover:text-blue-600 ml-2"
              href={REGISTER_PAGE}
            >
              Register
            </Link>
          </h1>
          <Button
            variant={'default'}
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md dark:bg-blue-500"
          >
            {t('login.title')}
          </Button>
        </form>
      </div>
    </div>
  )
}
