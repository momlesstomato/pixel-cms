import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { describe, expect, it } from 'vitest'
import { DEFAULT_TIME_ZONE } from '@/i18n/config'
import messages from '@/messages/es.json'
import Home from './Home'

/**
 * Renders the Home view with the Spanish base translation messages.
 */
const renderHome = () => {
  return render(
    <NextIntlClientProvider locale="es" messages={messages} timeZone={DEFAULT_TIME_ZONE}>
      <Home />
    </NextIntlClientProvider>,
  )
}

/**
 * Verifies the public content exposed by the Home view.
 */
describe('Home', () => {
  it('renders the dashboard heading and initial metrics', () => {
    renderHome()

    expect(screen.getByRole('heading', { name: 'Pixel CMS' })).toBeInTheDocument()
    expect(screen.getByText('Páginas')).toBeInTheDocument()
    expect(screen.getByText('Salas')).toBeInTheDocument()
    expect(screen.getByText('Miembros')).toBeInTheDocument()
  })
})
