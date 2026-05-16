import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Home from './Home'

/**
 * Verifies the public content exposed by the Home view.
 */
describe('Home', () => {
  it('renders the dashboard heading and initial metrics', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { name: 'Pixel CMS' })).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
    expect(screen.getByText('Members')).toBeInTheDocument()
  })
})
