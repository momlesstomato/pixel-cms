import { Box, SimpleGrid, Text, ThemeIcon } from '@mantine/core'
import Link from 'next/link'
import type { useTranslations } from 'next-intl'
import type { ReactElement } from 'react'
import type { MegaMenuLinkConfig } from '@/types/navigation'
import styles from '../../Header.module.css'

/**
 * Props accepted by MegaMenuLinks.
 */
type MegaMenuLinksProps = Readonly<{
  /**
   * Links displayed in the mega-menu middle grid.
   */
  links: readonly MegaMenuLinkConfig[]
  /**
   * Translation helper scoped to the navigation namespace.
   */
  t: ReturnType<typeof useTranslations>
}>

/**
 * Renders the middle link grid of a mega menu.
 */
const MegaMenuLinks = ({ links, t }: MegaMenuLinksProps): ReactElement => {
  return (
    <SimpleGrid className={styles.dropdownLinks} cols={2} spacing="xs" verticalSpacing="xs">
      {links.map((link) => {
        const Icon = link.icon

        return (
          <Link className={styles.megaLink} href={link.href} key={link.translationPath}>
            <ThemeIcon className={styles.megaIcon} radius="sm" size={36} variant="light">
              <Icon aria-hidden="true" size={18} />
            </ThemeIcon>
            <Box className={styles.megaLinkCopy}>
              <Text fw={800} size="sm">{t(`${link.translationPath}.label`)}</Text>
              <Text c="dimmed" size="xs">{t(`${link.translationPath}.description`)}</Text>
            </Box>
          </Link>
        )
      })}
    </SimpleGrid>
  )
}

export default MegaMenuLinks
