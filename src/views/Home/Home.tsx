import type { ReactElement } from 'react'
import styles from './Home.module.css'

/**
 * Metric displayed on the dashboard summary.
 */
type DashboardMetric = Readonly<{
  /**
   * Human-readable metric label.
   */
  label: string
  /**
   * Current metric value.
   */
  value: string
}>

/**
 * Initial dashboard metrics rendered by the Home view.
 */
const DASHBOARD_METRICS: readonly DashboardMetric[] = [
  { label: 'Pages', value: '0' },
  { label: 'Rooms', value: '0' },
  { label: 'Members', value: '0' },
]

/**
 * Renders the default dashboard view for the application.
 */
const Home = (): ReactElement => {
  return (
    <main className={styles.view}>
      <section className={styles.content} aria-labelledby="home-title">
        <p className={styles.kicker}>Dashboard</p>
        <h1 id="home-title" className={styles.title}>
          Pixel CMS
        </h1>
        <dl className={styles.metrics}>
          {DASHBOARD_METRICS.map((metric) => (
            <div className={styles.metric} key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
        <p className={styles.emptyState}>No activity recorded yet.</p>
      </section>
    </main>
  )
}

export default Home
