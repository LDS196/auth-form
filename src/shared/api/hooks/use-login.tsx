import { useMutation } from '@tanstack/react-query'
import { BodyLogin } from '@shared/api/interfaces/interfaces.types'
import authService from '@shared/api/services/auth'
import { STORAGE_KEYS } from '@shared/constants/api'
import { MAIN_PAGE } from '@shared/constants/routes'
import { AxiosError } from 'axios' // Импортируем тип AxiosError

export const useLogin = () => {
  return useMutation((data: BodyLogin) => authService.login(data), {
    onSuccess(data) {
      localStorage.setItem(STORAGE_KEYS.Access_token, data.token)
      window.location.href = MAIN_PAGE
    },
    onError(error: AxiosError | unknown) {
      if (error instanceof AxiosError) {
        console.error(
          'Login error:',
          error.response?.data?.message || error.message,
        )
      } else {
        console.error('Unknown error during login', error)
      }
    },
  })
}
