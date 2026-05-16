import { Card, Container, Dialog, Paper, rem } from '@mantine/core'
import { containerSizes } from '../../abstracts/tokens'

/**
 * Default override for Mantine Container.
 */
export const containerOverride = Container.extend({
  vars: (_, { size, fluid }) => ({
    root: {
      '--container-size': fluid
        ? '100%'
        : size !== undefined && size in containerSizes
          ? containerSizes[size]
          : rem(size),
    },
  }),
})

/**
 * Default override for Mantine Dialog.
 */
export const dialogOverride = Dialog.extend({
  defaultProps: {
    withBorder: true,
  },
})

/**
 * Default override for Mantine Card.
 */
export const cardOverride = Card.extend({
  defaultProps: {
    p: 'xl',
    shadow: 'xl',
    withBorder: true,
  },
  styles: (theme) => ({
    root: {
      backgroundColor: theme.primaryColor === 'rose' || theme.primaryColor === 'green'
        ? 'var(--mantine-color-secondary-filled)'
        : undefined,
    },
  }),
})

/**
 * Default override for Mantine Paper.
 */
export const paperOverride = Paper.extend({
  defaultProps: {
    shadow: 'xl',
  },
})
