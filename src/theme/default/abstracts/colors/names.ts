/**
 * Names of neutral palettes that need black or white contrast special cases.
 */
export const neutralPaletteNames = ['zinc', 'slate', 'gray', 'neutral', 'stone'] as const

/**
 * Names of every color palette exposed by the default Mantine theme.
 */
export const paletteNames = [
  'zinc',
  'slate',
  'gray',
  'neutral',
  'stone',
  'red',
  'rose',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
] as const

/**
 * Palette name supported by the default Mantine theme.
 */
export type PaletteName = (typeof paletteNames)[number]

/**
 * Neutral palette name supported by the default Mantine theme.
 */
export type NeutralPaletteName = (typeof neutralPaletteNames)[number]
