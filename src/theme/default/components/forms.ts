import {
  Checkbox,
  Chip,
  Radio,
  SegmentedControl,
  Select,
  Switch,
} from '@mantine/core'
import { getContrastColorVariable, getFilledColorVariable, getThemeColorKey } from '../abstracts/utils'

/**
 * Default overrides for form-oriented Mantine components.
 */
export const formComponentOverrides = {
  Checkbox: Checkbox.extend({
    vars: (theme, props) => {
      const colorKey = getThemeColorKey(theme, props.color)

      return {
        root: {
          '--checkbox-color': getFilledColorVariable(colorKey),
          '--checkbox-icon-color': getContrastColorVariable(colorKey),
        },
      }
    },
  }),
  Chip: Chip.extend({
    vars: (theme, props) => {
      const colorKey = getThemeColorKey(theme, props.color)
      const variant = props.variant ?? 'filled'

      return {
        root: {
          '--chip-bg': variant !== 'light' ? getFilledColorVariable(colorKey) : undefined,
          '--chip-color': variant === 'filled' ? getContrastColorVariable(colorKey) : undefined,
        },
      }
    },
  }),
  Radio: Radio.extend({
    vars: (theme, props) => {
      const colorKey = getThemeColorKey(theme, props.color)
      const color = colorKey !== undefined
        ? getFilledColorVariable(colorKey)
        : props.color ?? 'var(--mantine-primary-color-filled)'

      return {
        root: {
          '--radio-color': color,
          '--radio-icon-color': colorKey !== undefined
            ? getContrastColorVariable(colorKey)
            : props.color ?? 'var(--mantine-primary-color-contrast)',
        },
      }
    },
  }),
  SegmentedControl: SegmentedControl.extend({
    vars: (theme, props) => {
      const colorKey = getThemeColorKey(theme, props.color)
      const color = colorKey !== undefined
        ? ['zinc', 'slate', 'gray', 'neutral', 'stone'].includes(colorKey)
          ? 'var(--mantine-color-body)'
          : getFilledColorVariable(colorKey)
        : props.color ?? 'var(--mantine-color-default)'

      return {
        root: {
          '--sc-color': color,
        },
      }
    },
  }),
  Switch: Switch.extend({
    styles: () => ({
      thumb: {
        backgroundColor: 'var(--mantine-color-default)',
        borderColor: 'var(--mantine-color-default-border)',
      },
      track: {
        borderColor: 'var(--mantine-color-default-border)',
      },
    }),
  }),
  Select: Select.extend({
    defaultProps: {
      checkIconPosition: 'right',
    },
  }),
}
