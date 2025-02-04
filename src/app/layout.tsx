import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import QueryProvider from '../shared/providers/query-provider'
import { Heading } from '@shared/components/heading/Heading'
import ThemeProvider from '@shared/providers/theme-provider'
import { Toaster } from '@shared/components/ui/toaster'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <QueryProvider>
          <ThemeProvider>
            <Heading />
            <main>{children}</main>
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
