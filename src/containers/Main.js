import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectEbooks, fetchData } from './containerSlice';

import Banner from '../features/banner/Banner'
import Slider from '../features/slider/Slider'
import Catalog from '../features/catalog/Catalog'
import ProductCard from '../features/productCard/ProductCard'


import styles from './Main.module.scss';



function Main() {
  const dispatch = useDispatch();
  const ebooks = useSelector(selectEbooks);


  return (
    <main className={styles.mainPage} >
      <Switch>
        <Route path="/catalog/:tag" exact><Catalog /></Route>
        <Route path="/ebook/:tags" exact render={(props) => <ProductCard {...props} />} />
      </Switch>
    </main>
  );
}

export default Main;

/*
 <Banner />
      <Slider />
      <Banner />
      <Slider />
*/