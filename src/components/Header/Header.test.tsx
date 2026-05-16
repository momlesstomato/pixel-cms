import { MantineProvider } from '@mantine/core'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { describe, expect, it } from 'vitest'
import { DEFAULT_TIME_ZONE } from '@/i18n/config'
import messages from '@/messages/es.json'
import { defaultCssVariableResolver, defaultTheme } from '@/theme/default'
import Header from './Header'

/**
 * Renders the header with required providers.
 */
const renderHeader = () => {
  return render(
    <MantineProvider
      cssVariablesResolver={defaultCssVariableResolver}
      defaultColorScheme="auto"
      theme={defaultTheme}
    >
      <NextIntlClientProvider locale="es" messages={messages} timeZone={DEFAULT_TIME_ZONE}>
        <Header />
      </NextIntlClientProvider>
    </MantineProvider>,
  )
}

/**
 * Verifies public navigation behavior exposed by Header.
 */
describe('Header', () => {
  it('renders configured brand, navigation items, and actions', () => {
    renderHeader()

    expect(screen.getByRole('link', { name: /Pixel CMS/i })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('button', { name: /Funciones/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Entrar' })).toHaveAttribute('href', '/login')
  })

  it('opens the mobile drawer with configured mega-menu links', async () => {
    renderHeader()

    fireEvent.click(screen.getByRole('button', { name: 'Abrir menú' }))

    const dialog = await screen.findByRole('dialog')
    expect(within(dialog).getByRole('link', { name: /Pixel CMS/i })).toHaveAttribute('href', '/')

    fireEvent.click(within(dialog).getByRole('button', { name: 'Funciones' }))

    expect(within(dialog).getByRole('link', { name: /Analíticas/i })).toHaveAttribute('href', '/analytics')
    expect(within(dialog).getByRole('link', { name: 'Comenzar' })).toHaveAttribute('href', '/getting-started')
  })
})
