import { createTheme, type MantineThemeOverride } from '@mantine/core'
import {
  defaultColors,
  fontSizeTokens,
  headingTokens,
  lineHeightTokens,
  radiusTokens,
  shadowTokens,
  spacingTokens,
} from '../abstracts'
import { componentOverrides } from '../components'

/**
 * Default Mantine theme used by the Pixel CMS provider.
 */
export const defaultTheme: MantineThemeOverride = createTheme({
  colors: {
    ...defaultColors,
    primary: defaultColors.gray,
    secondary: defaultColors.gray,
    dark: defaultColors.gray,
    error: defaultColors.red,
    success: defaultColors.green,
    info: defaultColors.blue,
    warning: defaultColors.amber,
  },
  focusRing: 'never',
  scale: 1,
  primaryColor: 'primary',
  primaryShade: {
    light: 8,
    dark: 0,
  },
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: 'var(--font-geist-sans)',
  radius: radiusTokens,
  defaultRadius: 'sm',
  spacing: spacingTokens,
  fontSizes: fontSizeTokens,
  lineHeights: lineHeightTokens,
  headings: headingTokens,
  shadows: shadowTokens,
  cursorType: 'pointer',
  other: {
    style: 'default',
  },
  components: componentOverrides,
})
