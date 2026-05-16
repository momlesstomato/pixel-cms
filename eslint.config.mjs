import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

/**
 * Project ESLint configuration.
 */
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'never'],
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'coverage/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig
