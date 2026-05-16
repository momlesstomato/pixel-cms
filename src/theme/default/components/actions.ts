import { ActionIcon, Anchor, Button, NavLink, Pagination, Stepper } from '@mantine/core'
import {
  getContrastColorVariable,
  getThemeColorKey,
  isNeutralPalette,
} from '../abstracts/utils'

/**
 * Resolves foreground colors for actionable filled and white variants.
 */
const getActionColor = (
  colorKey: string | undefined,
  primaryColor: string,
  variant: string,
): string | undefined => {
  if (variant === 'filled') {
    return getContrastColorVariable(colorKey)
  }

  if (variant === 'white' && (isNeutralPalette(colorKey) || isNeutralPalette(primaryColor))) {
    return 'var(--mantine-color-black)'
  }

  return undefined
}

/**
 * Default overrides for action and navigation Mantine components.
 */
export const actionComponentOverrides = {
  ActionIcon: ActionIcon.extend({
    vars: (theme, props) => {
      const colorKey = getThemeColorKey(theme, props.color)

      return {
        root: {
          '--ai-color': getActionColor(colorKey, theme.primaryColor, props.variant ?? 'filled'),
        },
      }
    },
  }),
  Button: Button.extend({
    vars: (theme, props) => {
      const colorKey = getThemeColorKey(theme, props.color)

      return {
        root: {
          '--button-color': getActionColor(colorKey, theme.primaryColor, props.variant ?? 'filled'),
        },
      }
    },
  }),
  Anchor: Anchor.extend({
    defaultProps: {
      underline: 'always',
    },
  }),
  NavLink: NavLink.extend({
    vars: (theme, props) => {
      const colorKey = getThemeColorKey(theme, props.color)

      return {
        root: {
          '--nl-color': props.variant === 'filled'
            ? getContrastColorVariable(colorKey)
            : undefined,
        },
        children: {},
      }
    },
  }),
  Pagination: Pagination.extend({
    vars: (theme, props) => {
      const colorKey = getThemeColorKey(theme, props.color)

      return {
        root: {
          '--pagination-active-color': getContrastColorVariable(colorKey),
        },
      }
    },
  }),
  Stepper: Stepper.extend({
    vars: (theme, props) => {
      const colorKey = getThemeColorKey(theme, props.color)

      return {
        root: {
          '--stepper-icon-color': getContrastColorVariable(colorKey),
        },
      }
    },
  }),
}
