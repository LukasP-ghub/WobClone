import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../store/cartContext';
import ProductModel from '../../helpers/types/ProductModel';
import styles from './ProductCard.module.scss';
import covers from '../../assets/images';

const { card, picture, price, title } = styles;
const { toCartBtn } = styles;

const ProductCard: React.FC<{ ebook: ProductModel }> = ({ ebook }) => {
  const cartCtx = useContext(CartContext);
  const cover = covers.get(ebook.cover) || { small: '', medium: '' };

  return (
    <li className={card}>
      {/*--- CARD IS LINK TO PRODUCT PAGE ---*/}
      <Link to={{
        pathname: `/ebook/${ebook.title}-${ebook.author.firstName}-${ebook.author.lastName}`,
        state: {
          id: ebook.id,
        }
      }}>

        <picture >
          <source srcSet={`${cover.medium}`} media="(min-width: 1000px)" />
          <img src={`${cover.small}`} className={picture} alt="" />
        </picture>

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