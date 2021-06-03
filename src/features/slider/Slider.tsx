import { useState, useEffect, useCallback, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';

import { selectProducts, fetchRandomEbooks } from './sliderSlice';
import ProductCard from '../../commonComponents/productCard/ProductCard';

import SliderPage from './SliderPage';

import styles from './Slider.module.scss';

const { slider, arrow, leftArr, rightArr, pagesContainer, sliderPages, sliderPage, active } = styles;

const Slider: React.FC = () => {
  const [slidePage, setSlidePage] = useState(0);
  const [pagesArray, setPagesArray] = useState([]);

  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const pagesContRef = useRef<HTMLDivElement>(null);

  // function for changing slider pages
  const turnPage = (count: number) => {
    if (count >= 100) {
      setSlidePage(count - 100);
    } else if (slidePage === 0 && count < 0) {
      setSlidePage(pagesArray.length - 1);
    } else if (slidePage === pagesArray.length - 1 && count !== -1) {
      setSlidePage(0);
    } else {
      setSlidePage(prevCount => prevCount + count);
    }
  }

  //function calculate and fill number of pages and it elements
  const createPages = useCallback(() => {
    const itemWidth: number = 90;
    let maxItemsCountPerPage = Math.floor(pagesContRef.current!.offsetWidth / itemWidth - 1);
    let pagesCount = Math.ceil(products.length / maxItemsCountPerPage);
    let index = 0;
    let pagesArr: any = [];

    for (let i = 0; i < pagesCount; i++) {
      const itemsForPageArr = [];

      for (let i = 0; i < maxItemsCountPerPage; i++) {
        if (index === products.length) break;
        itemsForPageArr.push(<ProductCard key={products[index].id} ebook={products[index]} cardStyleVersion='cover' itemWidth={itemWidth} />);
        index++;
      }

      pagesArr.push(itemsForPageArr);
    }
    setPagesArray(pagesArr);
  }, [products]);

  useEffect(() => {
    dispatch(fetchRandomEbooks({ productsCount: 12, category: 'Wszystkie Ebooki' }));
  }, [dispatch])

  useEffect(() => {
    createPages();
  }, [createPages])


  return (
    <div className={slider}>
      {/* slider pages */}
      <div className={pagesContainer} ref={pagesContRef} >
        {pagesArray.map((item, index) => { return <SliderPage key={index} slidePage={slidePage}>{item}</SliderPage> })}
      </div>

      {/* elements for selecting page  */}
      <ul className={sliderPages}>
        {pagesArray.map((item, index) => {
          return <li
            key={Math.random()}
            className={`${sliderPage} ${slidePage === index ? active : null}`}
            onClick={() => turnPage(index + 100)} />
        })}
      </ul>

      {/* elements for turning page*/}
      <span className={`${arrow} ${leftArr} `} onClick={() => turnPage(-1)}>&lt;</span>
      <span className={`${arrow} ${rightArr}`} onClick={() => turnPage(1)}>&gt;</span>
    </div>
  );
}

export default Slider;