import type { Metadata } from 'next'
import type { ReactNode, ReactElement } from 'react'
import './globals.css'

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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
