import { useState, useEffect, useRef } from 'react';
import { useAppSelector } from '../../helpers/types/hooks';

import { selectCovers } from './sliderSlice';

import SliderItem from './SliderItem';
import SliderPage from './SliderPage';

import styles from './Slider.module.scss';

const { slider, arrow, leftArr, rightArr, pagesContainer, sliderPages, sliderPage, active } = styles;



function Slider() {
  const [slidePage, setSlidePage] = useState(0);
  const [pagesArray, setPagesArray] = useState([]);

  const covers = useAppSelector(selectCovers);
  //const dispatch = useAppDispatch();
  const pagesContRef = useRef<HTMLDivElement>(null);

  let pagesArr: any = [];

  useEffect(() => {
    createPages();
  }, [])


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
  const createPages = () => {
    let maxItemsCountPerPage = Math.floor(pagesContRef.current!.offsetWidth / 70 - 1);
    let pagesCount = Math.ceil(covers.length / maxItemsCountPerPage);
    let index = 0;

    for (let i = 0; i < pagesCount; i++) {
      const itemsForPageArr = [];
      for (let i = 0; i < maxItemsCountPerPage; i++) {
        if (index === covers.length) break;
        itemsForPageArr.push(<SliderItem key={Math.random()} content={covers[index]} />);
        index++;
      }
      pagesArr.push(itemsForPageArr);
    }
    setPagesArray(pagesArr);
  }




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