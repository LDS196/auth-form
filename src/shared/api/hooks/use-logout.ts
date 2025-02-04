import { STORAGE_KEYS } from '@shared/constants/api'
import { LOGIN_PAGE } from '@shared/constants/routes'
import { useRouter } from '@/i18n/routing'

export const useLogout = () => {
  const router = useRouter()

  return {
    logout: () => {
      localStorage.removeItem(STORAGE_KEYS.Access_token)
      router.push(LOGIN_PAGE)
    }
  };
}
