import { ActionIcon, Group } from '@mantine/core'
import { X } from 'lucide-react'
import type { useTranslations } from 'next-intl'
import type { ReactElement } from 'react'
import type { NavigationLinkConfig } from '@/types/navigation'
import styles from '../../Header.module.css'
import HeaderBrand from '../HeaderBrand/HeaderBrand'

/**
 * Props accepted by MobileMenuHeader.
 */
type MobileMenuHeaderProps = Readonly<{
  /**
   * Brand link displayed in the drawer header.
   */
  brand: NavigationLinkConfig
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
 * Renders the brand and close action at the top of the mobile drawer.
 */
const MobileMenuHeader = ({ brand, onClose, t }: MobileMenuHeaderProps): ReactElement => {
  return (
    <Group className={styles.mobileDrawerHeader} justify="space-between" w="100%">
      <HeaderBrand brand={brand} t={t} />
      <ActionIcon
        aria-label={t('mobile.closeMenu')}
        className={styles.mobileCloseButton}
        color="gray"
        onClick={onClose}
        radius="sm"
        size={38}
        variant="light"
      >
        <X aria-hidden="true" size={18} />
      </ActionIcon>
    </Group>
  )
}

export default MobileMenuHeader
