import type { MantineColorsTuple } from '@mantine/core'

/**
 * Warm palettes used for destructive, warning, and emphasis states.
 */
export const warmPalettes = {
  red: ['#FEF2F2', '#FEE2E2', '#FECACA', '#FCA5A5', '#F87171', '#DC2626', '#B91C1C', '#991B1B', '#7F1D1D', '#450A0A', '#EF4444'],
  rose: ['#fff1f2', '#ffe4e6', '#fecdd3', '#fda4af', '#fb7185', '#e11d48', '#be123c', '#9f1239', '#881337', '#4c0519', '#F43F5E'],
  orange: ['#fff7ed', '#ffedd5', '#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#9a3412', '#7c2d12', '#431407', '#F97316'],
  amber: ['#FFFBEB', '#FEF3C7', '#FDE68A', '#FCD34D', '#FBBF24', '#f59e0b', '#D97706', '#92400E', '#78350F', '#451A03', '#F59E0B'],
  yellow: ['#fefce8', '#fef9c3', '#fef08a', '#fde047', '#facc15', '#ca8a04', '#a16207', '#854d0e', '#713f12', '#3f2c06', '#F59E0B'],
} satisfies Record<string, MantineColorsTuple>
