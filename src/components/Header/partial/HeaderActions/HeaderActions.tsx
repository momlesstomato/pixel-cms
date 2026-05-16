import { Button, Group } from '@mantine/core'
import Link from 'next/link'
import type { useTranslations } from 'next-intl'
import type { ReactElement } from 'react'
import type { NavigationLinkConfig } from '@/types/navigation'
import styles from '../../Header.module.css'
import actionStyles from './HeaderActions.module.css'

/**
 * Props accepted by HeaderActions.
 */
type HeaderActionsProps = Readonly<{
  /**
   * Action links displayed at the end of the header.
   */
  actions: readonly NavigationLinkConfig[]
  /**
   * Translation helper scoped to the navigation namespace.
   */
  t: ReturnType<typeof useTranslations>
}>

/**
 * Renders desktop header action buttons.
 */
const HeaderActions = ({ actions, t }: HeaderActionsProps): ReactElement => {
  return (
    <Group className={styles.desktopActions}>
      {actions.map((action, index) => (
        <Button
          className={actionStyles.headerAction}
          component={Link}
          data-tone={index === 0 ? 'secondary' : 'primary'}
          href={action.href}
          key={action.translationPath}
          size="sm"
          variant="default"
        >
          {t(`${action.translationPath}.label`)}
        </Button>
      ))}
    </Group>
  )
}

export default HeaderActions
