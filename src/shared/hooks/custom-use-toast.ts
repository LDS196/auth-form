import { useToast } from '@shared/hooks/use-toast'
import { AxiosError } from 'axios'

export const useQToast = () => {
  const { toast } = useToast()

  const showToast = (error: AxiosError | unknown) => {
    if (error instanceof AxiosError) {
      toast({
        title: 'Register error:',
        description: error.response?.data?.message || error.message,
      })
    } else {
      toast({
        title: 'Unknown error during register',
        description: error?.toString(),
        type: 'background',
      })
    }
  }

  return { showToast }
}
