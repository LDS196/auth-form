'use client'
import React, { useEffect } from 'react'
import { useProfile } from '@shared/api/hooks/use-profile'
import { checkAuth } from '@shared/utils/utils'
import { useRouter } from 'next/navigation'
import { Loader } from '@shared/components/ui/loader/loader'
import { Button } from '@shared/components/ui'

export const Profile = () => {
  const isAuth = checkAuth()
  const { profile, isLoading } = useProfile()
  const router = useRouter()

  useEffect(() => {
    if (!isAuth) {
      router.push('/login')
    }
  }, [isAuth, router])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
          Profile
        </h1>
        {isLoading && <Loader />}
        <div className="flex flex-col space-y-6">
          <div>
            <div className="block w-full mt-1 border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600">
              sdsdsd
            </div>
          </div>
          <Button
            variant={'default'}
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md dark:bg-blue-500"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}
