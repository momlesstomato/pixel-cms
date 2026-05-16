import type { MantineColorsTuple } from '@mantine/core'
import { coolPalettes } from './cool'
import { naturePalettes } from './nature'
import { neutralPalettes } from './neutral'
import type { PaletteName } from './names'
import { vividPalettes } from './vivid'
import { warmPalettes } from './warm'

export { neutralPaletteNames, paletteNames } from './names'
export type { NeutralPaletteName, PaletteName } from './names'

/**
 * Color palettes exposed by the default Mantine theme.
 */
export const defaultColors = {
  ...neutralPalettes,
  ...warmPalettes,
  ...naturePalettes,
  ...coolPalettes,
  ...vividPalettes,
} satisfies Record<PaletteName, MantineColorsTuple>
