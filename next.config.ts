import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

/**
 * Applies next-intl integration to the Next.js configuration.
 */
const withNextIntl = createNextIntlPlugin()

/**
 * Next.js runtime and build configuration.
 */
const nextConfig: NextConfig = {
}

export default withNextIntl(nextConfig)
