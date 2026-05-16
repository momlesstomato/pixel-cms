import type { MantineColorsTuple } from '@mantine/core'

/**
 * Cool palettes used for informational states and primary accents.
 */
export const coolPalettes = {
  cyan: ['#ecfeff', '#cffafe', '#a5f3fc', '#67e8f9', '#22d3ee', '#0891b2', '#0e7490', '#155e75', '#164e63', '#083344', '#06B6D4'],
  sky: ['#f0f9ff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#0284c7', '#0369a1', '#075985', '#0c4a6e', '#082f49', '#0EA5E9'],
  blue: ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1e40af', '#1e3a8a', '#172554', '#3B82F6'],
  indigo: ['#eef2ff', '#e0e7ff', '#c7d2fe', '#a5b4fc', '#818cf8', '#4f46e5', '#4338ca', '#3730a3', '#312e81', '#1e1b4b', '#6366F1'],
} satisfies Record<string, MantineColorsTuple>
