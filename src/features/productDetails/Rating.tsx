import { JSX, useEffect, useState } from 'react';
import StarIcon from '../../assets/svg/StarIcon';
import { ProductModel } from '../../types/types';
import styles from './Rating.module.scss';

const { flexColumn, numberRating, starIcon, starFilled, wrapper } = styles;

interface RatingProps {
  isSidePanel: boolean,
  rating: ProductModel['rating'] | undefined,
}

export const Rating: React.FC<RatingProps> = ({ isSidePanel, rating }) => {
  const [ratingStarsArr, setRatingStarsArr] = useState<JSX.Element[]>([]);
  const checkSidePanel = isSidePanel ? flexColumn : null;
  const starCount = 5;
  const [value, maxValue] = rating ? [rating.value, rating.maxValue] : [0, 0];

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
    if (rating === undefined) return;
    fillRatingStars(Number(value), Number(maxValue), starCount);
  }, [])

  return (
    <div className={`${wrapper} ${checkSidePanel}`}>
      <StarIcon />
      <div className={numberRating}>{`${value} / ${maxValue}`}</div>
      <span>{ratingStarsArr}</span>
    </div>
  )
}