import React from 'react';
import styles from './Chart.module.scss'

const { chartIcon, chartIconWrapper } = styles;

function Chart() {
  return (
    <div className={chartIconWrapper}>
      <div className={chartIcon}>
        <svg id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
          <circle cx="25" cy="27" r="2" />
          <circle cx="12" cy="27" r="2" />
        </svg></div>
    </div>
  );
}

export default Chart;