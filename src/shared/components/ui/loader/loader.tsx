import styles from './loader.module.scss'

export const Loader = () => {
  return (
    <div className={styles['loader-container']}>
      <div className={styles.loader}></div>
    </div>
  )
}
