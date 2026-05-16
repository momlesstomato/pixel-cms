import { avatarOverride } from './avatar'
import { blockquoteOverride, markOverride, timelineOverride } from './content'
import { cardOverride, containerOverride, dialogOverride, paperOverride } from './surfaces'

/**
 * Default overrides for display and surface Mantine components.
 */
export const displayComponentOverrides = {
  Avatar: avatarOverride,
  Blockquote: blockquoteOverride,
  Card: cardOverride,
  Container: containerOverride,
  Dialog: dialogOverride,
  Mark: markOverride,
  Paper: paperOverride,
  Timeline: timelineOverride,
}
