import { Button, Drawer, Stack } from '@mantine/core'
import Link from 'next/link'
import type { useTranslations } from 'next-intl'
import type { ReactElement } from 'react'
import type { NavigationItemConfig, NavigationLinkConfig } from '@/types/navigation'
import styles from '../../Header.module.css'
import MobileMenuHeader from '../MobileMenuHeader/MobileMenuHeader'
import MobileMegaMenu from '../MobileMegaMenu/MobileMegaMenu'

/**
 * Props accepted by MobileMenu.
 */
type MobileMenuProps = Readonly<{
  /**
   * Product brand link displayed in the drawer header.
   */
  brand: NavigationLinkConfig
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
const MobileMenu = ({ actions, brand, items, onClose, opened, t }: MobileMenuProps): ReactElement => {
  return (
    <Drawer
      aria-label={t('mobile.title')}
      classNames={{ body: styles.mobileDrawerBody }}
      opened={opened}
      onClose={onClose}
      padding="md"
      position="right"
      size="min(420px, 100vw)"
      withCloseButton={false}
    >
      <MobileMenuHeader brand={brand} onClose={onClose} t={t} />
      <Stack className={styles.mobileNav}>
        {items.map((item) => (
          item.type === 'megaMenu'
            ? <MobileMegaMenu item={item} key={item.translationPath} onClose={onClose} t={t} />
            : (
              <Link className={styles.mobileLink} href={item.href} key={item.translationPath} onClick={onClose}>
                <span>{t(`${item.translationPath}.label`)}</span>
              </Link>
            )
        ))}
        <Stack className={styles.mobileActions}>
          {actions.map((action, index) => (
            <Button
              className={styles.mobileAction}
              component={Link}
              fullWidth
              h={38}
              href={action.href}
              key={action.translationPath}
              onClick={onClose}
              size="sm"
              variant={index === 0 ? 'default' : 'filled'}
            >
              {t(`${action.translationPath}.label`)}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Drawer>
  )
}

export default MobileMenu
