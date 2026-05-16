import type { LucideIcon } from 'lucide-react'

/**
 * Link displayed as a primary navigation item or action.
 */
export type NavigationLinkConfig = Readonly<{
  /**
   * Translation path relative to the navigation namespace.
   */
  translationPath: string
  /**
   * Destination opened when the link is activated.
   */
  href: string
}>

/**
 * Link displayed inside the mega-menu middle content grid.
 */
export type MegaMenuLinkConfig = NavigationLinkConfig & Readonly<{
  /**
   * Icon displayed beside the link content.
   */
  icon: LucideIcon
}>

/**
 * Introductory content displayed at the top of a mega menu.
 */
export type MegaMenuTopConfig = Readonly<{
  /**
   * Translation path for the top content title.
   */
  translationPath: string
  /**
   * Optional link displayed beside the top content.
   */
  action?: NavigationLinkConfig
}>

/**
 * Call-to-action displayed at the bottom of a mega menu.
 */
export type MegaMenuBottomConfig = Readonly<{
  /**
   * Translation path for the bottom content title and description.
   */
  translationPath: string
  /**
   * Link displayed as the bottom call-to-action button.
   */
  action: NavigationLinkConfig
}>

/**
 * Complete mega-menu panel configuration.
 */
export type MegaMenuConfig = Readonly<{
  /**
   * Top content displayed above the link grid.
   */
  top: MegaMenuTopConfig
  /**
   * Link grid displayed in the middle of the panel.
   */
  links: readonly MegaMenuLinkConfig[]
  /**
   * Bottom call-to-action content.
   */
  bottom: MegaMenuBottomConfig
}>

/**
 * Navigation item rendered as a direct link.
 */
export type DirectNavigationItemConfig = NavigationLinkConfig & Readonly<{
  /**
   * Discriminates direct links from expandable menu items.
   */
  type: 'link'
}>

/**
 * Navigation item rendered as a mega-menu trigger.
 */
export type MegaMenuNavigationItemConfig = NavigationLinkConfig & Readonly<{
  /**
   * Discriminates expandable menu items from direct links.
   */
  type: 'megaMenu'
  /**
   * Panel displayed when the item is expanded.
   */
  menu: MegaMenuConfig
}>

/**
 * Item displayed in the main application navigation.
 */
export type NavigationItemConfig = DirectNavigationItemConfig | MegaMenuNavigationItemConfig

/**
 * Full configuration for the application header.
 */
export type HeaderNavigationConfig = Readonly<{
  /**
   * Translation namespace used by all navigation paths.
   */
  translationNamespace: string
  /**
   * Brand link displayed at the start of the header.
   */
  brand: NavigationLinkConfig
  /**
   * Main navigation entries.
   */
  items: readonly NavigationItemConfig[]
  /**
   * Actions displayed at the end of the header.
   */
  actions: readonly NavigationLinkConfig[]
}>
