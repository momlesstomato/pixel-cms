import type { PaletteName } from '../../abstracts/colors'

/**
 * Shade configuration used to generate filled and outline variables.
 */
export type PaletteShadeMap = Record<PaletteName, number>

/**
 * Filled shade choices for the light color scheme.
 */
export const lightFilledShades: PaletteShadeMap = {
  zinc: 8,
  slate: 8,
  gray: 8,
  neutral: 8,
  stone: 8,
  red: 5,
  rose: 5,
  orange: 5,
  amber: 5,
  yellow: 4,
  lime: 5,
  green: 6,
  emerald: 5,
  teal: 5,
  cyan: 5,
  sky: 5,
  blue: 6,
  indigo: 5,
  violet: 5,
  purple: 5,
  fuchsia: 5,
  pink: 5,
}

/**
 * Filled shade choices for the dark color scheme.
 */
export const darkFilledShades: PaletteShadeMap = {
  zinc: 0,
  slate: 0,
  gray: 0,
  neutral: 0,
  stone: 0,
  red: 5,
  rose: 5,
  orange: 6,
  amber: 5,
  yellow: 4,
  lime: 4,
  green: 5,
  emerald: 5,
  teal: 4,
  cyan: 4,
  sky: 4,
  blue: 5,
  indigo: 6,
  violet: 6,
  purple: 6,
  fuchsia: 7,
  pink: 6,
}
