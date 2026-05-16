import { Box, Button, Group, Text } from '@mantine/core'
import Link from 'next/link'
import type { useTranslations } from 'next-intl'
import type { ReactElement } from 'react'
import type { MegaMenuBottomConfig } from '@/types/navigation'
import styles from '../../Header.module.css'

/**
 * Props accepted by MegaMenuFooter.
 */
type MegaMenuFooterProps = Readonly<{
  /**
   * Footer call-to-action configuration.
   */
  bottom: MegaMenuBottomConfig
  /**
   * Translation helper scoped to the navigation namespace.
   */
  t: ReturnType<typeof useTranslations>
}>

/**
 * Renders the bottom call-to-action area of a mega menu.
 */
const MegaMenuFooter = ({ bottom, t }: MegaMenuFooterProps): ReactElement => {
  return (
    <Group className={styles.dropdownBottom}>
      <Box className={styles.dropdownCopy}>
        <Text fw={800} size="sm">{t(`${bottom.translationPath}.title`)}</Text>
        <Text c="dimmed" size="xs">{t(`${bottom.translationPath}.description`)}</Text>
      </Box>
      <Button component={Link} href={bottom.action.href} variant="default">
        {t(`${bottom.action.translationPath}.label`)}
      </Button>
    </Group>
  )
}

export default MegaMenuFooter
