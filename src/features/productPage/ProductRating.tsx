import { useState, useEffect } from 'react';
import { useAppSelector } from '../../helpers/types/hooks';

import { selectProduct } from './productPageSlice';

import StarIcon from '../../assets/svg/StarIcon';
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
      <StarIcon />
      <div className={numberRating}>{`${product.rating.value} / ${product.rating.maxValue}`}</div>
      <span>{ratingStarsArr}</span>
    </div>
  )
}

export default ProductRating;