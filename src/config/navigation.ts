import {
  BarChart3,
  Bell,
  BookOpen,
  Code2,
  Fingerprint,
  ShieldCheck,
} from 'lucide-react'
import type { HeaderNavigationConfig } from '@/types/navigation'

/**
 * Main header navigation configuration.
 */
export const headerNavigationConfig: HeaderNavigationConfig = {
  translationNamespace: 'Navigation',
  brand: {
    translationPath: 'brand',
    href: '/',
  },
  items: [
    {
      type: 'link',
      translationPath: 'items.home',
      href: '/',
    },
    {
      type: 'megaMenu',
      translationPath: 'items.features',
      href: '/features',
      menu: {
        top: {
          translationPath: 'items.features.menu.top',
        },
        links: [
          {
            translationPath: 'items.features.menu.links.pages',
            href: '/pages',
            icon: Code2,
          },
          {
            translationPath: 'items.features.menu.links.rooms',
            href: '/rooms',
            icon: BookOpen,
          },
          {
            translationPath: 'items.features.menu.links.analytics',
            href: '/analytics',
            icon: BarChart3,
          },
          {
            translationPath: 'items.features.menu.links.members',
            href: '/members',
            icon: Fingerprint,
          },
          {
            translationPath: 'items.features.menu.links.security',
            href: '/security',
            icon: ShieldCheck,
          },
          {
            translationPath: 'items.features.menu.links.notifications',
            href: '/notifications',
            icon: Bell,
          },
        ],
        bottom: {
          translationPath: 'items.features.menu.bottom',
          action: {
            translationPath: 'items.features.menu.bottom.action',
            href: '/getting-started',
          },
        },
      },
    },
    {
      type: 'link',
      translationPath: 'items.learn',
      href: '/learn',
    },
    {
      type: 'link',
      translationPath: 'items.community',
      href: '/community',
    },
  ],
  actions: [
    {
      translationPath: 'actions.login',
      href: '/login',
    },
    {
      translationPath: 'actions.start',
      href: '/getting-started',
    },
  ],
}
