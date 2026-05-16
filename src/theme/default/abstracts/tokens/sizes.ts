import { rem } from '@mantine/core'

/**
 * Container sizes available to Mantine Container.
 */
export const containerSizes: Record<string, string> = {
  xxs: rem('200px'),
  xs: rem('300px'),
  sm: rem('400px'),
  md: rem('500px'),
  lg: rem('600px'),
  xl: rem('1400px'),
  xxl: rem('1600px'),
}

/**
 * Radius tokens shared across Mantine components.
 */
export const radiusTokens = {
  xs: rem('6px'),
  sm: rem('8px'),
  md: rem('12px'),
  lg: rem('16px'),
  xl: rem('24px'),
}

/**
 * Spacing tokens shared across Mantine components.
 */
export const spacingTokens = {
  '4xs': rem('2px'),
  '3xs': rem('4px'),
  '2xs': rem('8px'),
  xs: rem('10px'),
  sm: rem('12px'),
  md: rem('16px'),
  lg: rem('20px'),
  xl: rem('24px'),
  '2xl': rem('28px'),
  '3xl': rem('32px'),
  '4xl': rem('40px'),
}
