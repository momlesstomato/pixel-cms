import { Box, Button, Drawer, Stack, Text } from '@mantine/core'
import Link from 'next/link'
import type { useTranslations } from 'next-intl'
import type { ReactElement } from 'react'
import type { NavigationItemConfig, NavigationLinkConfig } from '@/types/navigation'
import styles from '../../Header.module.css'

/**
 * Props accepted by MobileMenu.
 */
type MobileMenuProps = Readonly<{
  /**
   * Main navigation items.
   */
  items: readonly NavigationItemConfig[]
  /**
   * Action links displayed after navigation items.
   */
  actions: readonly NavigationLinkConfig[]
  /**
   * Whether the drawer is open.
   */
  opened: boolean
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
 * Renders the mobile navigation drawer.
 */
const MobileMenu = ({ actions, items, onClose, opened, t }: MobileMenuProps): ReactElement => {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      padding="md"
      position="right"
      size="min(420px, 100vw)"
      title={t('mobile.title')}
    >
      <Stack className={styles.mobileNav}>
        {items.map((item) => {
          if (item.type === 'megaMenu') {
            return (
              <Box className={styles.mobilePanel} key={item.translationPath}>
                <Text fw={800}>{t(`${item.translationPath}.label`)}</Text>
                <Text c="dimmed" mb="sm" size="sm">{t(`${item.menu.top.translationPath}.description`)}</Text>
                <Stack gap="xs">
                  {item.menu.links.map((link) => (
                    <Link className={styles.mobileLink} href={link.href} key={link.translationPath} onClick={onClose}>
                      {t(`${link.translationPath}.label`)}
                    </Link>
                  ))}
                </Stack>
              </Box>
            )
          }

          return (
            <Link className={styles.mobileLink} href={item.href} key={item.translationPath} onClick={onClose}>
              {t(`${item.translationPath}.label`)}
            </Link>
          )
        })}
        {actions.map((action, index) => (
          <Button
            component={Link}
            fullWidth
            href={action.href}
            key={action.translationPath}
            onClick={onClose}
            variant={index === 0 ? 'default' : 'filled'}
          >
            {t(`${action.translationPath}.label`)}
          </Button>
        ))}
      </Stack>
    </Drawer>
  )
}

export default MobileMenu
