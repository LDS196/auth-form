import { AxiosError, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { STORAGE_KEYS } from '@/shared/constants/api'
import { Pages } from '@/shared/constants/routes'

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`

const UNAUTHORIZED_STATUSES = [401]

export const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(STORAGE_KEYS.Access_token)

  if (token) {
    config.headers.authorization = `${token}`
  }

  return config
}

const responseRejectInterceptor = async (error: AxiosError) => {
  if (error.code === 'ERR_CANCELED') {
    throw error
  }

  const errStatus = error.response?.status

  if (errStatus && UNAUTHORIZED_STATUSES.includes(errStatus)) {
    const currentLocale = window.location.pathname.split('/')[1] || 'en'
    localStorage.removeItem(STORAGE_KEYS.Access_token)
    window.location.href = `/${currentLocale}/${Pages.Login}`
  }

  return Promise.reject(error)
}

apiService.interceptors.request.use(requestInterceptor)
apiService.interceptors.response.use(
  (response) => response,
  responseRejectInterceptor,
)
