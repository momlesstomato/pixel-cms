import Link from 'next/link'
import type { useTranslations } from 'next-intl'
import type { ReactElement } from 'react'
import type { NavigationLinkConfig } from '@/types/navigation'
import styles from '../../Header.module.css'

/**
 * Props accepted by HeaderBrand.
 */
type HeaderBrandProps = Readonly<{
  /**
   * Brand link configuration.
   */
  brand: NavigationLinkConfig
  /**
   * Translation helper scoped to the navigation namespace.
   */
  t: ReturnType<typeof useTranslations>
}>

/**
 * Renders the product identity link in the header.
 */
const HeaderBrand = ({ brand, t }: HeaderBrandProps): ReactElement => {
  return (
    <Link className={styles.brand} href={brand.href}>
      <span className={styles.brandMark} aria-hidden="true">P</span>
      <span>{t(`${brand.translationPath}.label`)}</span>
    </Link>
  )
}

export default HeaderBrand
