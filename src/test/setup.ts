/**
 * Registers DOM matchers for Vitest component tests.
 */
import '@testing-library/jest-dom/vitest'

/**
 * Provides the browser color-scheme API expected by MantineProvider in jsdom.
 */
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string): MediaQueryList => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false,
  }),
})
