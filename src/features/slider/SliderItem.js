import React from 'react';
import styles from './SliderItem.module.scss'

const { sliderItem } = styles;

function SliderItem(props) {
  return (
    <li className={sliderItem}>
      {props.content}
    </li>
  );
}

export default SliderItem;