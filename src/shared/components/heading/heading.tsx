'use client'

import React from 'react'
import { ModeToggle } from '@shared/components/mode-toggle/mode-toggle'

export const Heading = () => {

  return (
      <header className="flex justify-end p-4 sticky top-0 w-[100%] bg-gray-600 dark:bg-gray-800">
        <ModeToggle />
      </header>
  )
}
