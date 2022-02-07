import React from 'react';
import ChevronLeft from '../../assets/svg/ChevronLeft';
import ChevronRight from '../../assets/svg/ChevronRight';

import styles from './Pagination.module.scss';
const { pagesIndicators, pageIndicator, active, arrow, leftArr, rightArr } = styles;

interface IPagination {
  pagesArray: JSX.Element[][],
  slidePage: number,
  turnPage: (count: number) => void,
}

export const Pagination: React.FC<IPagination> = ({ pagesArray, slidePage, turnPage }) => {
  return (
    <>
      <ul className={pagesIndicators}>
        {pagesArray.map((item, index) => {
          return <li
            key={Math.random() + index}
            className={`${pageIndicator} ${slidePage === index ? active : null}`}
            onClick={() => turnPage(index + 100)} />
        })}
      </ul>

      <div className={`${arrow} ${leftArr} `} onClick={() => turnPage(-1)}><ChevronLeft /></div>
      <div className={`${arrow} ${rightArr}`} onClick={() => turnPage(1)}><ChevronRight /></div>
    </>
  );
}
