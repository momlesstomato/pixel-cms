import type { ReactElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it, vi } from 'vitest'
import messages from '@/messages/es.json'
import BaseLayout from './BaseLayout'

vi.mock('geist/font/sans', () => ({
  GeistSans: {
    className: 'geist-sans',
    variable: 'geist-sans-variable',
  },
}))

vi.mock('next-intl/server', () => ({
  getLocale: vi.fn(async () => 'es'),
  getMessages: vi.fn(async () => messages),
}))

/**
 * Renders the async BaseLayout component for server-side assertions.
 */
const renderBaseLayout = async (children: ReactElement): Promise<string> => {
  const element = await BaseLayout({ children })

  return renderToStaticMarkup(element)
}

/**
 * Verifies the server-owned layout shell.
 */
describe('BaseLayout', () => {
  it('renders the Spanish document shell around children', async () => {
    const markup = await renderBaseLayout(<main>Contenido</main>)

    expect(markup).toContain('lang="es"')
    expect(markup).toContain('Contenido')
  })
})
