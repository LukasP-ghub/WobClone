import React from 'react';

import Banner from '../features/banner/Banner'
import Slider from '../features/slider/Slider'

import styles from './Main.module.scss';



function Main() {
  return (
    <main className={styles.mainPage} >
      <Banner />
      <Slider />
      <Banner />
      <Slider />
    </main>
  );
}

export default Main;