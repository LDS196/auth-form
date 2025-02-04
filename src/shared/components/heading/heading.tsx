'use client'

import React from 'react'
import { ModeToggle } from '@shared/components/mode-toggle/mode-toggle'
import { LocaleToggle } from '@shared/components/locale-toggle/locale-toggle'

export const Heading = () => {

  return (
      <header className="flex justify-end gap-3 p-4 sticky top-0 w-[100%] bg-gray-600 dark:bg-gray-700">
        <LocaleToggle/>
        <ModeToggle />
      </header>
  )
}
