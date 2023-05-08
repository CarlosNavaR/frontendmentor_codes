import styles from './index.module.css';

type chartProps = {
  title: string;
  qnty: number;
};

export default function index({ title, qnty }: chartProps) {
  const date = new Date();
  const activeDay = date.toDateString().split(' ')[0].toLowerCase();
  return (
    <div className={styles.graph_container}>
      <div className={styles.graph}>
        <span className={styles.graph_bar_qnty}>${qnty}</span>
        <div
          className={`${styles.graph_bar} ${
            activeDay === title ? styles.graph_bar_active : ''
          }`}
          style={{
            height: `${qnty}%`
          }}
        />
      </div>
      <p className={styles.graph_title}>{title}</p>
    </div>
  );
}
