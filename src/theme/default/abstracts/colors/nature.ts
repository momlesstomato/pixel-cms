import type { MantineColorsTuple } from '@mantine/core'

/**
 * Nature palettes used for success, positive status, and fresh accents.
 */
export const naturePalettes = {
  lime: ['#f7fee7', '#ecfccb', '#d9f99d', '#bef264', '#a3e635', '#4d7c0f', '#3f6212', '#365314', '#1a2e05', '#0f1903', '#84CC16'],
  green: ['#F0FDF4', '#DCFCE7', '#BBF7D0', '#86EFAC', '#4ADE80', '#22c55e', '#16A34A', '#166534', '#14532D', '#052E16', '#10B981'],
  emerald: ['#ecfdf5', '#d1fae5', '#a7f3d0', '#6ee7b7', '#34d399', '#059669', '#047857', '#065f46', '#064e3b', '#022c22', '#10B981'],
  teal: ['#f0fdfa', '#ccfbf1', '#99f6e4', '#5eead4', '#2dd4bf', '#0d9488', '#0f766e', '#115e59', '#134e4a', '#042f2e', '#14B8A6'],
} satisfies Record<string, MantineColorsTuple>
