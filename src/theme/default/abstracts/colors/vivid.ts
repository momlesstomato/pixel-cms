import type { MantineColorsTuple } from '@mantine/core'

/**
 * Vivid palettes reserved for high-emphasis accents and labels.
 */
export const vividPalettes = {
  violet: ['#f5f3ff', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95', '#1e1b4b', '#8B5CF6'],
  purple: ['#faf5ff', '#f3e8ff', '#e9d5ff', '#d8b4fe', '#c084fc', '#9333ea', '#7e22ce', '#6b21a8', '#581c87', '#2e1065', '#A855F7'],
  fuchsia: ['#fdf4ff', '#fae8ff', '#f5d0fe', '#f0abfc', '#e879f9', '#c026d3', '#a21caf', '#86198f', '#701a75', '#4a044e', '#D946EF'],
  pink: ['#fdf2f8', '#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#db2777', '#be185d', '#9d174d', '#831843', '#500724', '#EC4899'],
} satisfies Record<string, MantineColorsTuple>
