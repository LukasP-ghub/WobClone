import React from 'react';
import styles from './SliderPage.module.scss'

const { itemList } = styles;

function SliderPage({ slidePage, children }) {
  return (
    <ul className={itemList} style={{ transform: `translateX(${slidePage * -100}%)` }}>
      {children}
    </ul>
  );
}

export default SliderPage;