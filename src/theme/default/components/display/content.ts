import { Blockquote, Mark, Timeline } from '@mantine/core'
import {
  getContrastColorVariable,
  getThemeColorKey,
  isNeutralPalette,
} from '../../abstracts/utils'

/**
 * Default override for Mantine Timeline.
 */
export const timelineOverride = Timeline.extend({
  vars: (theme, props) => {
    const colorKey = getThemeColorKey(theme, props.color)

    return {
      root: {
        '--tl-icon-color': getContrastColorVariable(colorKey),
      },
    }
  },
})

/**
 * Default override for Mantine Blockquote.
 */
export const blockquoteOverride = Blockquote.extend({
  vars: (theme, props) => {
    const colorKey = getThemeColorKey(theme, props.color)
    const color = colorKey !== undefined
      ? `var(--mantine-color-${colorKey}-light)`
      : 'var(--mantine-primary-color-light)'

    return {
      root: {
        '--bq-bg-dark': color,
        '--bq-bg-light': color,
      },
    }
  },
})

/**
 * Default override for Mantine Mark.
 */
export const markOverride = Mark.extend({
  vars: (theme, props) => {
    const colorKey = getThemeColorKey(theme, props.color) ?? 'yellow'

    return {
      root: {
        '--mark-bg-light': `var(--mantine-color-${colorKey}-${isNeutralPalette(colorKey) ? '3' : 'filled-hover'})`,
        '--mark-bg-dark': `var(--mantine-color-${colorKey}-filled)`,
      },
    }
  },
})
