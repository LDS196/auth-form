'use client'
import React, { useEffect } from 'react'
import { useProfile } from '@shared/api/hooks/use-profile'
import { checkAuth } from '@shared/utils/utils'
import { useRouter } from 'next/navigation'
import { Button, Skeleton } from '@shared/components/ui'
import { LucideMail, KeyIcon } from 'lucide-react'
import { useLogout } from '@shared/api/hooks/use-logout'

export const Profile = () => {
  const isAuth = checkAuth()
  const { profile, isLoading } = useProfile()
  const { logout } = useLogout()
  const router = useRouter()

  useEffect(() => {
    if (!isAuth) {
      router.push('/login')
    }
  }, [isAuth, router])


  return (
    <div className="pt-10 flex flex-col items-center justify-center">
      {isLoading ? (
        <Skeleton className="w-[448px] h-[364px] bg-gray-300 dark:bg-gray-500" />
      ) : (
        <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800">
          <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
            Profile
          </h1>

          <div className="flex flex-col space-y-6">
            <div className="flex flex-col gap-2 mt-1 border-gray-300 rounded border-2 p-2 shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <div className=" flex gap-1 items-start">
                <LucideMail /> <span>Email</span>
              </div>
              <span>{profile?.email}</span>
            </div>
            <div className="flex flex-col gap-2 mt-1 border-gray-300 rounded border-2 p-2 shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <div className=" flex gap-1 items-start">
                <KeyIcon /> <span>ID</span>
              </div>
              <span>{profile?.id}</span>
            </div>
            <Button
              onClick={logout}
              variant={'default'}
              type="submit"
              className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md dark:bg-blue-500"
            >
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
