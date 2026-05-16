import { Box, Group, Text } from '@mantine/core'
import type { useTranslations } from 'next-intl'
import type { ReactElement } from 'react'
import type { MegaMenuTopConfig } from '@/types/navigation'
import styles from '../../Header.module.css'

/**
 * Props accepted by MegaMenuHeader.
 */
type MegaMenuHeaderProps = Readonly<{
  /**
   * Header content configuration.
   */
  top: MegaMenuTopConfig
  /**
   * Translation helper scoped to the navigation namespace.
   */
  t: ReturnType<typeof useTranslations>
}>

/**
 * Renders the top content area of a mega menu.
 */
const MegaMenuHeader = ({ top, t }: MegaMenuHeaderProps): ReactElement => {
  return (
    <Group className={styles.dropdownTop}>
      <Box className={styles.dropdownCopy}>
        <Text fw={800}>{t(`${top.translationPath}.title`)}</Text>
        <Text c="dimmed" size="sm">{t(`${top.translationPath}.description`)}</Text>
      </Box>
    </Group>
  )
}

export default MegaMenuHeader
