import { apiService } from '@/shared/api'
import { BodyLogin, BodyRegister, ResponseType } from '@/shared/api/interfaces/interfaces.types'

const authService = {
  register: async (data: BodyRegister): Promise<ResponseType> => {
    const response = await apiService.post<ResponseType>('/register', data)
    return response.data
  },

  login: async (data: BodyLogin): Promise<ResponseType> => {
    const response = await apiService.post<ResponseType>('/login', data)
    return response.data
  }
}

export default authService