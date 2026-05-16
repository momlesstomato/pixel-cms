import type { Metadata } from 'next'
import type { ReactNode, ReactElement } from 'react'
import BaseLayout from '@/layout/BaseLayout/BaseLayout'
import '@/styles/main.scss'

/**
 * Default metadata used by the application shell.
 */
export const metadata: Metadata = {
  title: 'Pixel CMS',
  description: 'A typed Next.js content management interface.',
}

/**
 * Props accepted by the root application layout.
 */
type RootLayoutProps = Readonly<{
  /**
   * Active route segment rendered inside the document shell.
   */
  children: ReactNode
}>

/**
 * Renders the root document shell for every application route.
 */
const RootLayout = ({ children }: RootLayoutProps): ReactElement => {
  return <BaseLayout>{children}</BaseLayout>
}

export default RootLayout
