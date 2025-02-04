import { Roboto } from 'next/font/google'
import './globals.css'
import QueryProvider from '@shared/providers/query-provider'
import { Heading } from '@shared/components/heading/heading'
import ThemeProvider from '@shared/providers/theme-provider'
import { Toaster } from '@shared/components/ui/toaster'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Metadata } from 'next'
import React from 'react'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: 'Auth App',
  description: 'Authentication app template',
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <QueryProvider>
            <ThemeProvider>
              <Heading />
              <main>{children}</main>
              <Toaster />
            </ThemeProvider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
