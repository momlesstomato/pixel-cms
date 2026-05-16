import { Avatar } from '@mantine/core'
import {
  getContrastColorVariable,
  getThemeColorKey,
  isNeutralPalette,
} from '../../abstracts/utils'

/**
 * Resolves avatar text colors for Mantine variants.
 */
const getAvatarColor = (
  colorKey: string | undefined,
  primaryColor: string,
  variant: string,
): string | undefined => {
  if (variant === 'filled') {
    return getContrastColorVariable(colorKey)
  }

  if (variant === 'light') {
    return colorKey !== undefined
      ? `var(--mantine-color-${colorKey}-light-color)`
      : 'var(--mantine-primary-color-light-color)'
  }

  if (variant === 'white') {
    return isNeutralPalette(colorKey) || isNeutralPalette(primaryColor)
      ? 'var(--mantine-color-black)'
      : colorKey !== undefined
        ? `var(--mantine-color-${colorKey}-outline)`
        : 'var(--mantine-primary-color-filled)'
  }

  return variant === 'outline' || variant === 'transparent'
    ? colorKey !== undefined
      ? `var(--mantine-color-${colorKey}-outline)`
      : 'var(--mantine-primary-color-filled)'
    : undefined
}

/**
 * Default override for Mantine Avatar.
 */
export const avatarOverride = Avatar.extend({
  vars: (theme, props) => {
    const colorKey = getThemeColorKey(theme, props.color)
    const variant = props.variant ?? 'light'

    return {
      root: {
        '--avatar-bg': variant === 'filled'
          ? colorKey !== undefined
            ? `var(--mantine-color-${colorKey}-filled)`
            : 'var(--mantine-primary-color-filled)'
          : variant === 'light'
            ? colorKey !== undefined
              ? `var(--mantine-color-${colorKey}-light)`
              : 'var(--mantine-primary-color-light)'
            : undefined,
        '--avatar-color': getAvatarColor(colorKey, theme.primaryColor, variant),
        '--avatar-bd': variant === 'outline'
          ? colorKey !== undefined
            ? `1px solid var(--mantine-color-${colorKey}-outline)`
            : '1px solid var(--mantine-primary-color-filled)'
          : undefined,
      },
    }
  },
})
