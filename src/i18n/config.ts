/**
 * Default locale used by the application and base translation catalog.
 */
export const DEFAULT_LOCALE = 'es' as const

/**
 * Default time zone used by server and client internationalization providers.
 */
export const DEFAULT_TIME_ZONE = 'America/Bogota' as const

/**
 * Locale identifiers supported by the application.
 */
export const SUPPORTED_LOCALES = [DEFAULT_LOCALE] as const

/**
 * Union of locale identifiers supported by the application.
 */
export type AppLocale = (typeof SUPPORTED_LOCALES)[number]
