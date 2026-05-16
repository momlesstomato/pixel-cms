import { Group, HoverCard, UnstyledButton } from '@mantine/core'
import { ChevronDown } from 'lucide-react'
import type { useTranslations } from 'next-intl'
import type { ReactElement } from 'react'
import type { MegaMenuNavigationItemConfig } from '@/types/navigation'
import styles from '../../Header.module.css'
import MegaMenuFooter from '../MegaMenuFooter/MegaMenuFooter'
import MegaMenuHeader from '../MegaMenuHeader/MegaMenuHeader'
import MegaMenuLinks from '../MegaMenuLinks/MegaMenuLinks'

/**
 * Props accepted by MegaMenu.
 */
type MegaMenuProps = Readonly<{
  /**
   * Mega-menu item rendered in the header.
   */
  item: MegaMenuNavigationItemConfig
  /**
   * Translation helper scoped to the navigation namespace.
   */
  t: ReturnType<typeof useTranslations>
}>

/**
 * Renders the desktop mega-menu trigger and dropdown.
 */
const MegaMenu = ({ item, t }: MegaMenuProps): ReactElement => {
  return (
    <HoverCard position="bottom" radius="sm" shadow="xl" width={660} withinPortal>
      <HoverCard.Target>
        <UnstyledButton className={styles.menuTrigger}>
          <Group gap={6} wrap="nowrap">
            <span>{t(`${item.translationPath}.label`)}</span>
            <ChevronDown aria-hidden="true" size={16} />
          </Group>
        </UnstyledButton>
      </HoverCard.Target>
      <HoverCard.Dropdown className={styles.dropdown}>
        <MegaMenuHeader top={item.menu.top} t={t} />
        <MegaMenuLinks links={item.menu.links} t={t} />
        <MegaMenuFooter bottom={item.menu.bottom} t={t} />
      </HoverCard.Dropdown>
    </HoverCard>
  )
}

export default MegaMenu
