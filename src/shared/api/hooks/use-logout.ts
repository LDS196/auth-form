import { STORAGE_KEYS } from '@shared/constants/api'
import { LOGIN_PAGE  } from '@shared/constants/routes'

export const useLogout = () => {
  return {
    logout: () => {
      localStorage.removeItem(STORAGE_KEYS.Access_token)
      window.location.href = LOGIN_PAGE
    }
  };
}
