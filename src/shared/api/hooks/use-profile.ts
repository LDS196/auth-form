import userService from '@shared/api/services/profile'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useQToast } from '@shared/hooks/custom-use-toast'
import { checkAccessToken } from '@shared/utils'

export const useProfile = () => {
  const { showToast } = useQToast()
  const isAccessToken = checkAccessToken()

  const { data: profile, ...query } = useQuery({
    queryKey: ['profile'],
    queryFn: () => userService.getProfile(),
    enabled: isAccessToken,
    onError(error: AxiosError | unknown) {
      showToast(error)
    },
  })

  return { profile, ...query }
}
