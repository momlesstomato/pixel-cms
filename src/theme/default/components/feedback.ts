import { Alert, Badge, Indicator, ThemeIcon, Tooltip } from '@mantine/core'
import {
  getContrastColorVariable,
  getFilledColorVariable,
  getThemeColorKey,
  isNeutralPalette,
} from '../abstracts/utils'

/**
 * Resolves variant-aware foreground colors for feedback components.
 */
const getFeedbackColor = (
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
 * Default overrides for status and feedback Mantine components.
 */
export const feedbackComponentOverrides = {
  Alert: Alert.extend({
    vars: (theme, props) => {
      const colorKey = getThemeColorKey(theme, props.color)

      return {
        root: {
          '--alert-color': getFeedbackColor(colorKey, theme.primaryColor, props.variant ?? 'light'),
        },
      }
    },
  }),
  Tooltip: Tooltip.extend({
    vars: () => ({
      tooltip: {
        '--tooltip-bg': 'var(--mantine-primary-color-filled)',
        '--tooltip-color': 'var(--mantine-primary-color-contrast)',
      },
    }),
  }),
  Badge: Badge.extend({
    vars: (theme, props) => {
      const colorKey = getThemeColorKey(theme, props.color)
      const variant = props.variant ?? 'filled'

      return {
        root: {
          '--badge-bg': variant === 'filled' && colorKey !== undefined
            ? getFilledColorVariable(colorKey)
            : undefined,
          '--badge-color': getFeedbackColor(colorKey, theme.primaryColor, variant),
        },
      }
    },
  }),
  Indicator: Indicator.extend({
    vars: (theme, props) => {
      const colorKey = getThemeColorKey(theme, props.color)

      return {
        root: {
          '--indicator-text-color': getContrastColorVariable(colorKey),
        },
      }
    },
  }),
  ThemeIcon: ThemeIcon.extend({
    vars: (theme, props) => {
      const colorKey = getThemeColorKey(theme, props.color)

      return {
        root: {
          '--ti-color': getFeedbackColor(colorKey, theme.primaryColor, props.variant ?? 'filled'),
        },
      }
    },
  }),
}
