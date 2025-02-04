import userService from '@shared/api/services/profile'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useProfile = () => {
  const { data: profile, ...query } = useQuery({
    queryKey: ['profile'],
    queryFn: () => userService.getProfile(),
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

  return { profile, ...query }
}
