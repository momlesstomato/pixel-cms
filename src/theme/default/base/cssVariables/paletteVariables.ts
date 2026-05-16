import { alpha } from '@mantine/core'
import { paletteNames, type PaletteName } from '../../abstracts/colors'
import type { PaletteShadeMap } from './shades'

/**
 * Mantine CSS variable dictionary.
 */
export type VariableMap = Record<string, string>

/**
 * Builds repeated color variables for one color scheme.
 */
export const createPaletteVariables = (
  filledShades: PaletteShadeMap,
  contrastColors: Record<PaletteName, string>,
  lightOpacity: number,
  lightTextShade: number,
): VariableMap => {
  return paletteNames.reduce<VariableMap>((variables, paletteName) => {
    const filledShade = filledShades[paletteName]

    variables[`--mantine-color-${paletteName}-filled`] = `var(--mantine-color-${paletteName}-${filledShade})`
    variables[`--mantine-color-${paletteName}-filled-hover`] = alpha(`var(--mantine-color-${paletteName}-${filledShade})`, 0.9)
    variables[`--mantine-color-${paletteName}-light`] = alpha(`var(--mantine-color-${paletteName}-4)`, lightOpacity)
    variables[`--mantine-color-${paletteName}-light-hover`] = alpha(`var(--mantine-color-${paletteName}-light)`, 0.8)
    variables[`--mantine-color-${paletteName}-light-color`] = `var(--mantine-color-${paletteName}-${lightTextShade})`
    variables[`--mantine-color-${paletteName}-outline`] = `var(--mantine-color-${paletteName}-${filledShade})`
    variables[`--mantine-color-${paletteName}-outline-hover`] = alpha(`var(--mantine-color-${paletteName}-4)`, lightOpacity)
    variables[`--mantine-color-${paletteName}-contrast`] = contrastColors[paletteName]

    return variables
  }, {})
}
