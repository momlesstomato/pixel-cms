'use client'

import { Box, Burger, Container } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useTranslations } from 'next-intl'
import type { ReactElement } from 'react'
import { headerNavigationConfig } from '@/config/navigation'
import HeaderActions from './partial/HeaderActions/HeaderActions'
import HeaderBrand from './partial/HeaderBrand/HeaderBrand'
import HeaderNavigation from './partial/HeaderNavigation/HeaderNavigation'
import MobileMenu from './partial/MobileMenu/MobileMenu'
import styles from './Header.module.css'

/**
 * Renders the configured application header with desktop and mobile navigation.
 */
const Header = (): ReactElement => {
  const [opened, { close, toggle }] = useDisclosure(false)
  const t = useTranslations(headerNavigationConfig.translationNamespace)

  return (
    <Box component="header" className={styles.header}>
      <Container size="xxl" className={styles.inner}>
        <HeaderBrand brand={headerNavigationConfig.brand} t={t} />
        <HeaderNavigation items={headerNavigationConfig.items} t={t} />
        <HeaderActions actions={headerNavigationConfig.actions} t={t} />
        <Burger
          aria-label={t(opened ? 'mobile.closeMenu' : 'mobile.openMenu')}
          className={styles.mobileButton}
          opened={opened}
          onClick={toggle}
        />
      </Container>
      <MobileMenu
        actions={headerNavigationConfig.actions}
        items={headerNavigationConfig.items}
        onClose={close}
        opened={opened}
        t={t}
      />
    </Box>
  )
}

export default Header
