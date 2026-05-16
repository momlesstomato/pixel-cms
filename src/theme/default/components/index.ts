import { actionComponentOverrides } from './actions'
import { displayComponentOverrides } from './display'
import { feedbackComponentOverrides } from './feedback'
import { formComponentOverrides } from './forms'

/**
 * Mantine component overrides assembled from focused theme modules.
 */
export const componentOverrides = {
  ...displayComponentOverrides,
  ...formComponentOverrides,
  ...actionComponentOverrides,
  ...feedbackComponentOverrides,
}
