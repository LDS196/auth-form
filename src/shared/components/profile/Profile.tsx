'use client'
import React, { useEffect } from 'react'
import { useProfile } from '@shared/api/hooks/use-profile'
import { checkAuth } from '@shared/utils/utils'
import { useRouter } from 'next/navigation'

export const Profile = () => {
  const isAuth = checkAuth()
  const { profile } = useProfile()
  const router = useRouter()

  useEffect(() => {
    if (!isAuth) {
      router.push('/login')
    }
  }, [isAuth, router])

  return <div>{profile?.id}</div>
}