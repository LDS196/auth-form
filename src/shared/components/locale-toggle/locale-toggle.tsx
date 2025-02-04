'use client'
import * as React from 'react'
import { LanguagesIcon } from 'lucide-react'
import { Button, DropdownMenu } from '@shared/components/ui'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@shared/components/ui/dropdown-menu'
import { usePathname } from 'next/navigation'

export function LocaleToggle() {
  const pathname = usePathname()

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    window.location.pathname = newPath
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <LanguagesIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage('en')}>
          EN
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage('ru')}>
          RU
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
