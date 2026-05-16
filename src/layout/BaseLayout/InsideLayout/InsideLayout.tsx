'use client'

import type { AbstractIntlMessages } from 'next-intl'
import { NextIntlClientProvider } from 'next-intl'
import type { ReactElement, ReactNode } from 'react'

/**
 * Props accepted by client-capable layout providers.
 */
type InsideLayoutProps = Readonly<{
  /**
   * Active locale used by client-side translation consumers.
   */
  locale: string
  /**
   * Translation messages available to client-side translation consumers.
   */
  messages: AbstractIntlMessages
  /**
   * Route content rendered inside client-capable providers.
   */
  children: ReactNode
}>

/**
 * Renders providers that require or may require a client boundary.
 */
const InsideLayout = ({ children, locale, messages }: InsideLayoutProps): ReactElement => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

export default InsideLayout
