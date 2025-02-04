import userService from '@shared/api/services/profile'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useQToast } from '@shared/hooks/custom-use-toast'

export const useProfile = () => {
  const { showToast } = useQToast()
  const { data: profile, ...query } = useQuery({
    queryKey: ['profile'],
    queryFn: () => userService.getProfile(),
    onError(error: AxiosError | unknown) {
      showToast(error)
    },
  })

  return { profile, ...query }
}
