import React from "react";
import Node from "../../components/graphNode";
import data from "../../data.json";
import styles from "./index.module.css";
export default function index() {
  const total = data.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <div className={styles.chart_container}>
      <div className={styles.chart_header}>
        <h1>Spending - last 7 days</h1>
      </div>
      <div className={styles.chart}>
        {data.map((item, index) => {
          return <Node key={index} title={item.day} qnty={item?.amount} />;
        })}
      </div>

      <div className={styles.chart_footer}>
        <div className={styles.chart_footer_total}>
          <span>Total this month</span>
          <p>${total}</p>
        </div>
        <div className={styles.chart_footer_average}>
          <p>+2.4%</p>
          <span>From last month</span>
        </div>
      </div>
    </div>
  );
}
