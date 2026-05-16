import type { ReactElement } from 'react'
import Home from '@/views/Home/Home'

/**
 * Renders the home route by delegating page composition to the Home view.
 */
const Page = (): ReactElement => {
  return <Home />
}

export default Page
