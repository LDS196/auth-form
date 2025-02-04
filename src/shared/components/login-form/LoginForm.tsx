'use client'
import React from 'react'
import { useLogin } from '@shared/api/hooks/use-login'

export const LoginForm = () => {
  const { mutateAsync: login } = useLogin()

  const handleLogin = async () => {
    await login({
      email: '111qwerty@gmail.com',
      password: '123456',
    })
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>login</button>
    </div>
  )
}
