import { getRequestConfig } from 'next-intl/server'
import { DEFAULT_LOCALE, DEFAULT_TIME_ZONE } from './config'

/**
 * Provides the request-scoped locale and messages consumed by next-intl.
 */
const requestConfig = getRequestConfig(async () => {
  return {
    locale: DEFAULT_LOCALE,
    messages: (await import(`../messages/${DEFAULT_LOCALE}.json`)).default,
    timeZone: DEFAULT_TIME_ZONE,
  }
})

export default requestConfig
