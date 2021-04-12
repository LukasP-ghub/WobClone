import React from 'react';
import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//import { setProductTags } from './productMiniCardSlice';

import styles from './ProductMiniCard.module.scss'

const { card, picture, price, title } = styles;

function ProductMiniCard(props) {
  // const dispatch = useDispatch();
  return (
    <li className={card}>
      <Link to={{
        pathname: `/ebook/${props.title}-${props.authorFirstName}-${props.authorLastName}`,
        state: {
          title: props.title,
          authorFirstName: props.authorFirstName,
          authorLastName: props.authorLastName
        }
      }}>

        <div className={picture}></div>
        <h3 className={title}>{props.title}</h3>
        <cite>{`${props.authorFirstName} ${props.authorLastName}`}</cite>
        <div className={price}>{`${props.price} zł`}</div>

      </Link>
    </li>
  );
}

export default ProductMiniCard;