import { render, screen } from '@testing-library/react'
import { useTranslations } from 'next-intl'
import type { ReactElement } from 'react'
import { describe, expect, it } from 'vitest'
import messages from '@/messages/es.json'
import InsideLayout from './InsideLayout'

/**
 * Probe component used to verify that InsideLayout exposes translations.
 */
const TranslationProbe = (): ReactElement => {
  const t = useTranslations('Home')

  return <span>{t('emptyState')}</span>
}

/**
 * Verifies client-capable providers owned by InsideLayout.
 */
describe('InsideLayout', () => {
  it('provides Spanish messages to client translation consumers', () => {
    render(
      <InsideLayout locale="es" messages={messages}>
        <TranslationProbe />
      </InsideLayout>,
    )

    expect(screen.getByText('Todavía no hay actividad registrada.')).toBeInTheDocument()
  })
})
