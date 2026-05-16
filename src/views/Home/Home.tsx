import type { ReactElement } from 'react'
import { useTranslations } from 'next-intl'
import styles from './Home.module.css'

/**
 * Metric displayed on the dashboard summary.
 */
type DashboardMetric = Readonly<{
  /**
   * Translation key used for the human-readable metric label.
   */
  labelKey: string
  /**
   * Current metric value.
   */
  value: string
}>

/**
 * Initial dashboard metrics rendered by the Home view.
 */
const DASHBOARD_METRICS: readonly DashboardMetric[] = [
  { labelKey: 'metrics.pages', value: '0' },
  { labelKey: 'metrics.rooms', value: '0' },
  { labelKey: 'metrics.members', value: '0' },
]

/**
 * Renders the default dashboard view for the application.
 */
const Home = (): ReactElement => {
  const t = useTranslations('Home')

  return (
    <main className={styles.view}>
      <section className={styles.content} aria-labelledby="home-title">
        <p className={styles.kicker}>{t('kicker')}</p>
        <h1 id="home-title" className={styles.title}>
          {t('title')}
        </h1>
        <dl className={styles.metrics}>
          {DASHBOARD_METRICS.map((metric) => (
            <div className={styles.metric} key={metric.labelKey}>
              <dt>{t(metric.labelKey)}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
        <p className={styles.emptyState}>{t('emptyState')}</p>
      </section>
    </main>
  )
}

export default Home
