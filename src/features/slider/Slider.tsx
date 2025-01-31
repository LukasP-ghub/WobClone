import { JSX, useCallback, useEffect, useRef, useState } from 'react';
import { MQBreakpoints } from '../../constants/constants';
import useWidth from '../../hooks/useWidth';
import { ProductModel } from '../../types/types';

import ProductCard from '../../components/productCard/ProductCard';
import { Pagination } from './Pagination';
import SliderPage from './SliderPage';

import styles from './Slider.module.scss';

const { slider, pagesContainer } = styles;

type DataType = ProductModel[];

interface SliderOptions {
  itemsCount: number;
  data: DataType | undefined;
}

export const Slider: React.FC<SliderOptions> = ({ itemsCount, data }) => {
  const [slidePage, setSlidePage] = useState(0);
  const [pagesArray, setPagesArray] = useState<JSX.Element[][]>([]);

  const pagesContRef = useRef<HTMLDivElement>(null);
  const { currWidth } = useWidth();

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

  // function to calculate and fill number of pages and their elements
  const createPages = useCallback(() => {
    const itemWidthDesktop = 150;
    const itemWidthMobile = 90;
    const itemWidth: number = currWidth > MQBreakpoints.DESKTOP ? itemWidthDesktop : itemWidthMobile;
    let maxItemsCountPerPage = Math.floor(pagesContRef.current!.offsetWidth / itemWidth - 1);
    let pagesCount = Math.ceil(itemsCount / maxItemsCountPerPage);
    let itemsCounter = 0;
    let pagesArr: JSX.Element[][] = [];

    for (let i = 0; i < pagesCount; i++) {
      const itemsForPageArr: JSX.Element[] = [];

      for (let j = 0; j < maxItemsCountPerPage; j++) {
        if (itemsCounter === itemsCount) break;
        const [product] = (data as DataType).filter((item, index) => index === itemsCounter);
        itemsForPageArr.push(<ProductCard key={product!.id} ebook={product} cardStyleVersion='cover' itemWidth={itemWidth} />);
        itemsCounter++;
      }

      pagesArr.push(itemsForPageArr);
    }
    setPagesArray(pagesArr);
  }, [data, currWidth, itemsCount]);

  useEffect(() => {
    createPages();
  }, [createPages])

  return (
    <div className={slider}>
      <div className={pagesContainer} ref={pagesContRef} >
        {pagesArray.map((item, index) => <SliderPage key={index} slidePage={slidePage}>{item}</SliderPage>)}
      </div>
      <Pagination pagesArray={pagesArray} slidePage={slidePage} turnPage={turnPage} />
    </div>
  );
}
