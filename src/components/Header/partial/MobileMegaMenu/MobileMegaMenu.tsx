import { Box, Group, Stack, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import type { useTranslations } from 'next-intl'
import type { ReactElement } from 'react'
import type { NavigationItemConfig } from '@/types/navigation'
import styles from '../../Header.module.css'

/**
 * Props accepted by MobileMegaMenu.
 */
type MobileMegaMenuProps = Readonly<{
  /**
   * Mega-menu navigation item.
   */
  item: Extract<NavigationItemConfig, { type: 'megaMenu' }>
  /**
   * Closes the drawer.
   */
  onClose: () => void
  /**
   * Translation helper scoped to the navigation namespace.
   */
  t: ReturnType<typeof useTranslations>
}>

/**
 * Renders a collapsible mobile mega-menu section.
 */
const MobileMegaMenu = ({ item, onClose, t }: MobileMegaMenuProps): ReactElement => {
  const [expanded, { toggle }] = useDisclosure(false)

  return (
    <Box className={styles.mobilePanel}>
      <UnstyledButton aria-expanded={expanded} className={styles.mobileMenuTrigger} onClick={toggle}>
        <span>{t(`${item.translationPath}.label`)}</span>
        <ChevronDown aria-hidden="true" className={expanded ? styles.mobileChevronOpen : undefined} size={16} />
      </UnstyledButton>
      {expanded && (
        <Box mt="sm">
          <Text c="dimmed" className={styles.mobileMenuDescription} size="sm">
            {t(`${item.menu.top.translationPath}.description`)}
          </Text>
          <Stack gap="xs" mt="sm">
            {item.menu.links.map((link) => {
              const Icon = link.icon

              return (
                <Link className={styles.mobileMegaLink} href={link.href} key={link.translationPath} onClick={onClose}>
                  <ThemeIcon className={styles.mobileMegaIcon} radius="sm" size={34} variant="light">
                    <Icon aria-hidden="true" size={17} />
                  </ThemeIcon>
                  <Group className={styles.mobileMegaCopy}>
                    <Text fw={700} size="sm">{t(`${link.translationPath}.label`)}</Text>
                    <Text c="dimmed" size="xs">{t(`${link.translationPath}.description`)}</Text>
                  </Group>
                </Link>
              )
            })}
          </Stack>
        </Box>
      )}
    </Box>
  )
}

export default MobileMegaMenu
