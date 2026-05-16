import type { MantineTheme } from '@mantine/core'
import { neutralPaletteNames } from '../colors'

/**
 * Resolves a Mantine color prop to a theme palette key when possible.
 */
export const getThemeColorKey = (
  theme: MantineTheme,
  color: string | undefined,
): string | undefined => {
  return color !== undefined && Object.keys(theme.colors).includes(color) ? color : undefined
}

/**
 * Checks whether a palette should use neutral contrast fallbacks.
 */
export const isNeutralPalette = (color: string | undefined): boolean => {
  return color !== undefined && (neutralPaletteNames as readonly string[]).includes(color)
}

/**
 * Returns the filled background CSS variable for a theme-aware color prop.
 */
export const getFilledColorVariable = (colorKey: string | undefined): string => {
  return colorKey !== undefined
    ? `var(--mantine-color-${colorKey}-filled)`
    : 'var(--mantine-primary-color-filled)'
}

/**
 * Returns the contrast CSS variable for a theme-aware color prop.
 */
export const getContrastColorVariable = (colorKey: string | undefined): string => {
  return colorKey !== undefined
    ? `var(--mantine-color-${colorKey}-contrast)`
    : 'var(--mantine-primary-color-contrast)'
}
