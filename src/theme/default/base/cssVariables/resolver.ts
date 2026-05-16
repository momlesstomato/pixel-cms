import { alpha, type CSSVariablesResolver } from '@mantine/core'
import { darkContrastColors, lightContrastColors } from './contrast'
import { createPaletteVariables } from './paletteVariables'
import { darkFilledShades, lightFilledShades } from './shades'

/**
 * Resolves global CSS variables for the default Mantine theme.
 */
export const defaultCssVariableResolver: CSSVariablesResolver = () => ({
  variables: {
    '--mantine-heading-font-weight': '600',
    '--mantine-primary-color-filled-hover': alpha('var(--mantine-primary-color-filled)', 0.9),
    '--mantine-primary-color-light': 'var(--mantine-color-gray-light)',
    '--mantine-primary-color-light-hover': 'var(--mantine-color-gray-light-hover)',
    '--mantine-primary-color-light-color': 'var(--mantine-color-gray-light-color)',
  },
  light: {
    '--mantine-primary-color-contrast': 'var(--mantine-color-gray-0)',
    '--mantine-color-text': 'var(--mantine-color-secondary-9)',
    '--mantine-color-body': 'var(--mantine-color-white)',
    '--mantine-color-error': 'var(--mantine-color-error-10)',
    '--mantine-color-placeholder': 'var(--mantine-color-secondary-10)',
    '--mantine-color-anchor': 'var(--mantine-color-secondary-10)',
    '--mantine-color-default': 'var(--mantine-color-secondary-0)',
    '--mantine-color-default-hover': 'var(--mantine-color-secondary-1)',
    '--mantine-color-default-color': 'var(--mantine-color-secondary-9)',
    '--mantine-color-default-border': 'var(--mantine-color-secondary-2)',
    '--mantine-color-dimmed': 'var(--mantine-color-secondary-10)',
    '--mantine-color-secondary-filled': 'var(--mantine-color-white)',
    '--mantine-color-secondary-filled-hover': 'var(--mantine-color-secondary-1)',
    '--mantine-color-secondary-light': 'var(--mantine-color-secondary-1)',
    '--mantine-color-secondary-light-hover': alpha('var(--mantine-color-secondary-light)', 0.8),
    '--mantine-color-secondary-text': 'var(--mantine-primary-color-contrast)',
    '--mantine-color-secondary-light-color': 'var(--mantine-color-secondary-8)',
    '--mantine-color-secondary-outline': 'var(--mantine-color-secondary-2)',
    '--mantine-color-secondary-outline-hover': 'var(--mantine-color-secondary-1)',
    ...createPaletteVariables(lightFilledShades, lightContrastColors, 0.1, 6),
  },
  dark: {
    '--mantine-primary-color-contrast': 'var(--mantine-color-gray-8)',
    '--mantine-color-text': 'var(--mantine-color-secondary-0)',
    '--mantine-color-body': 'var(--mantine-color-secondary-9)',
    '--mantine-color-error': 'var(--mantine-color-error-10)',
    '--mantine-color-placeholder': 'var(--mantine-color-secondary-4)',
    '--mantine-color-anchor': 'var(--mantine-color-secondary-4)',
    '--mantine-color-default': 'var(--mantine-color-secondary-9)',
    '--mantine-color-default-hover': 'var(--mantine-color-secondary-7)',
    '--mantine-color-default-color': 'var(--mantine-color-secondary-1)',
    '--mantine-color-default-border': 'var(--mantine-color-secondary-7)',
    '--mantine-color-dimmed': 'var(--mantine-color-secondary-4)',
    '--mantine-color-secondary-filled': 'var(--mantine-color-secondary-8)',
    '--mantine-color-secondary-filled-hover': alpha('var(--mantine-color-secondary-filled)', 0.9),
    '--mantine-color-secondary-light': 'var(--mantine-color-secondary-7)',
    '--mantine-color-secondary-light-hover': alpha('var(--mantine-color-secondary-light)', 0.8),
    '--mantine-color-secondary-text': 'var(--mantine-primary-color-contrast)',
    '--mantine-color-secondary-light-color': 'var(--mantine-color-secondary-0)',
    '--mantine-color-secondary-outline': 'var(--mantine-color-secondary-7)',
    '--mantine-color-secondary-outline-hover': 'var(--mantine-color-secondary-7)',
    ...createPaletteVariables(darkFilledShades, darkContrastColors, 0.15, 3),
  },
})
