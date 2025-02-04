import { apiService } from '@/shared/api'
import { ProfileResponse } from '@/shared/api/interfaces/interfaces.types'

const userService = {
  getProfile: async (): Promise<ProfileResponse> => {
    const response = await apiService.get<ProfileResponse>('/profile')
    return response.data
  },
}

export default userService