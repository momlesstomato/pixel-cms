import { rem } from '@mantine/core'

/**
 * Font-size tokens shared across Mantine components.
 */
export const fontSizeTokens = {
  xs: rem('12px'),
  sm: rem('14px'),
  md: rem('16px'),
  lg: rem('18px'),
  xl: rem('20px'),
  '2xl': rem('24px'),
  '3xl': rem('30px'),
  '4xl': rem('36px'),
  '5xl': rem('48px'),
}

/**
 * Line-height tokens shared across Mantine components.
 */
export const lineHeightTokens = {
  xs: rem('18px'),
  sm: rem('20px'),
  md: rem('24px'),
  lg: rem('28px'),
}

/**
 * Heading sizes and weights used by Mantine Title.
 */
export const headingTokens = {
  fontFamily: 'Geist',
  sizes: {
    h1: {
      fontSize: rem('36px'),
      lineHeight: rem('44px'),
      fontWeight: '600',
    },
    h2: {
      fontSize: rem('30px'),
      lineHeight: rem('38px'),
      fontWeight: '600',
    },
    h3: {
      fontSize: rem('24px'),
      lineHeight: rem('32px'),
      fontWeight: '600',
    },
    h4: {
      fontSize: rem('20px'),
      lineHeight: rem('30px'),
      fontWeight: '600',
    },
  },
}
