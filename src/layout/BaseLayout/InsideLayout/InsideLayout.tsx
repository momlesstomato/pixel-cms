'use client'

import { MantineProvider } from '@mantine/core'
import type { AbstractIntlMessages } from 'next-intl'
import { NextIntlClientProvider } from 'next-intl'
import type { ReactElement, ReactNode } from 'react'
import Header from '@/components/Header/Header'
import { DEFAULT_TIME_ZONE } from '@/i18n/config'
import { defaultCssVariableResolver, defaultTheme } from '@/theme/default'

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
    <MantineProvider
      cssVariablesResolver={defaultCssVariableResolver}
      defaultColorScheme="auto"
      theme={defaultTheme}
    >
      <NextIntlClientProvider locale={locale} messages={messages} timeZone={DEFAULT_TIME_ZONE}>
        <Header />
        {children}
      </NextIntlClientProvider>
    </MantineProvider>
  )
}

export default InsideLayout
