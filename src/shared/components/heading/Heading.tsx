'use client'

import React from 'react'
import { ModeToggle } from '@shared/components/mode-toggle/ModeToggle'

export const Heading = () => {

  return (

      <header className=" flex justify-end p-4">
        <ModeToggle />
      </header>
  )
}
