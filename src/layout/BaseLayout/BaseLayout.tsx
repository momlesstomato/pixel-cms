/* eslint-disable @next/next/no-head-element -- Mantine ColorSchemeScript must render before body hydration. */
import { ColorSchemeScript } from '@mantine/core'
import { GeistSans } from 'geist/font/sans'
import type { AbstractIntlMessages } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import type { ReactElement, ReactNode } from 'react'
import InsideLayout from './InsideLayout/InsideLayout'

/**
 * Props accepted by the server-rendered base layout.
 */
type BaseLayoutProps = Readonly<{
  /**
   * Route content rendered inside global layout providers.
   */
  children: ReactNode
}>

/**
 * Renders server-owned document structure and non-client provider setup.
 */
const BaseLayout = async ({ children }: BaseLayoutProps): Promise<ReactElement> => {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className={`${GeistSans.variable} ${GeistSans.className}`}>
        <InsideLayout locale={locale} messages={messages as AbstractIntlMessages}>
          {children}
        </InsideLayout>
      </body>
    </html>
  )
}

export default BaseLayout
