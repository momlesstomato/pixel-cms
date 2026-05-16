import type { MantineColorsTuple } from '@mantine/core'
import type { NeutralPaletteName } from './names'

/**
 * Neutral color palettes used for surfaces, text, and default controls.
 */
export const neutralPalettes: Record<NeutralPaletteName, MantineColorsTuple> = {
  zinc: ['#fafafa', '#f4f4f5', '#e4e4e7', '#d4d4d8', '#a1a1aa', '#52525b', '#3f3f46', '#27272a', '#18181b', '#09090b', '#71717A'],
  slate: ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#475569', '#334155', '#1e293b', '#0f172a', '#020817', '#64748B'],
  gray: ['#f9fafb', '#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#4b5563', '#374151', '#1f2937', '#111827', '#030712', '#6B7280'],
  neutral: ['#fafafa', '#f5f5f5', '#e5e5e5', '#d4d4d4', '#a3a3a3', '#525252', '#404040', '#262626', '#171717', '#0a0a0a', '#737373'],
  stone: ['#fafaf9', '#f5f5f4', '#e7e5e4', '#d6d3d1', '#a8a29e', '#57534e', '#44403c', '#292524', '#1c1917', '#0c0a09', '#78716C'],
}
