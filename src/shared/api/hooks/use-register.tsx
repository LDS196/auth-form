import { useMutation } from '@tanstack/react-query'
import { BodyRegister } from '@shared/api/interfaces/interfaces.types'
import authService from '@shared/api/services/auth'
import { STORAGE_KEYS } from '@shared/constants/api'
import { MAIN_PAGE } from '@shared/constants/routes'
import { AxiosError } from 'axios'

export const useRegister = () => {
  return useMutation((data: BodyRegister) => authService.register(data), {
    onSuccess(data) {
      localStorage.setItem(STORAGE_KEYS.Access_token, data.token)
      window.location.href = MAIN_PAGE

    },
    onError(error: AxiosError | unknown) {
      if (error instanceof AxiosError) {
        console.error(
          'Register error:',
          error.response?.data?.message || error.message,
        )
      } else {
        console.error('Unknown error during login', error)
      }
    },
  })
}
