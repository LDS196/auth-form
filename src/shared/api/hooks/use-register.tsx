import { useMutation } from '@tanstack/react-query'
import { BodyRegister } from '@shared/api/interfaces/interfaces.types'
import authService from '@shared/api/services/auth'
import { STORAGE_KEYS } from '@shared/constants/api'
import { MAIN_PAGE } from '@shared/constants/routes'
import { AxiosError } from 'axios'
import { useQToast } from '@shared/hooks/custom-use-toast'

export const useRegister = () => {
  const { showToast } = useQToast()

  return useMutation((data: BodyRegister) => authService.register(data), {
    onSuccess(data) {
      localStorage.setItem(STORAGE_KEYS.Access_token, data.token)
      window.location.href = MAIN_PAGE
    },
    onError(error: AxiosError | unknown) {
      showToast(error)
    },
  })
}
