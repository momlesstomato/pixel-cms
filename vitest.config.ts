import { defineConfig } from 'vitest/config'

/**
 * Vitest configuration for React component unit tests.
 */
const vitestConfig = defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
})

export default vitestConfig
