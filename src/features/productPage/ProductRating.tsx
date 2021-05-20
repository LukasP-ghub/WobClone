import { useState, useEffect } from 'react';
import { useAppSelector } from '../../helpers/types/hooks';

import { selectProduct } from './productPageSlice';

import styles from './ProductRating.module.scss';

const { flexColumn, numberRating, starIcon, starFilled, wrapper } = styles;

const ProductRating: React.FC<{ isSidePanel: boolean }> = ({ isSidePanel }) => {
  const [ratingStarsArr, setRatingStarsArr] = useState<JSX.Element[]>([]);
  const product = useAppSelector(selectProduct);
  const checkSidePanel = isSidePanel ? flexColumn : null;

  //scaling rating system to stars count and filling them with color
  const fillRatingStars = (rating: number, maxRating: number, starsCount: number) => {
    const scaledRating = Math.ceil(rating / maxRating * starsCount);
    const arr = [];

    for (let i = 1; i <= starsCount; i++) {
      const starFill = i <= scaledRating ? starFilled : null;
      arr.push(
        <svg className={`${starIcon} ${starFill}`} key={i}>
          <use href="#star" />
        </svg>)
    }
    setRatingStarsArr(arr);
  }

  useEffect(() => {
    fillRatingStars(product.rating.value, product.rating.maxValue, 5);
  }, [])

  return (
    <div className={`${wrapper} ${checkSidePanel}`}>
      <svg id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" style={{ display: 'none' }}>
        <symbol id="star">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
        </symbol>
      </svg>
      <div className={numberRating}>{`${product.rating.value} / ${product.rating.maxValue}`}</div>
      <span>{ratingStarsArr}</span>
    </div>
  )
}

export default ProductRating;