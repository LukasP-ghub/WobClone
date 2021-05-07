import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//import { setProductTags } from './productCardSlice';
import CartContext from '../../store/cartContext';

import styles from './ProductCard.module.scss'

const { card, picture, price, title } = styles;
const { toCartBtn } = styles;

function ProductCard({ ebook }) {
  const cartCtx = useContext(CartContext);
  console.log('ProductCard ', ebook);
  return (
    <li className={card}>
      {/*--- CARD IS LINK TO PRODUCT PAGE ---*/}
      <Link to={{
        pathname: `/ebook/${ebook.title}-${ebook.author.firstName}-${ebook.author.lastName}`,
        state: {
          id: ebook.id,
        }
      }}>

        <div className={picture}></div>
        <h3 className={title}>{ebook.title}</h3>
        <cite>{`${ebook.author.firstName} ${ebook.author.lastName}`}</cite>
        <div className={price}>{`${ebook.price} zł`}</div>
      </Link>

      {/* --- BUTTON ADD TO CART ---  */}
      <button className={toCartBtn} onClick={() => cartCtx.addToCart(ebook)}>
        <svg id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
          <circle cx="25" cy="27" r="2" />
          <circle cx="12" cy="27" r="2" />
        </svg>
      </button>
    </li>
  );
}

export default ProductCard;