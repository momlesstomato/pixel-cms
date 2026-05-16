import { Group } from '@mantine/core'
import Link from 'next/link'
import type { useTranslations } from 'next-intl'
import type { ReactElement } from 'react'
import type { NavigationItemConfig } from '@/types/navigation'
import styles from '../../Header.module.css'
import MegaMenu from '../MegaMenu/MegaMenu'

/**
 * Props accepted by HeaderNavigation.
 */
type HeaderNavigationProps = Readonly<{
  /**
   * Main navigation items.
   */
  items: readonly NavigationItemConfig[]
  /**
   * Translation helper scoped to the navigation namespace.
   */
  t: ReturnType<typeof useTranslations>
}>

/**
 * Renders desktop navigation items.
 */
const HeaderNavigation = ({ items, t }: HeaderNavigationProps): ReactElement => {
  return (
    <Group component="nav" className={styles.nav} aria-label={t('aria.primary')}>
      {items.map((item) => {
        if (item.type === 'megaMenu') {
          return <MegaMenu item={item} key={item.translationPath} t={t} />
        }

        return (
          <Link className={styles.navLink} href={item.href} key={item.translationPath}>
            {t(`${item.translationPath}.label`)}
          </Link>
        )
      })}
    </Group>
  )
}

export default HeaderNavigation
