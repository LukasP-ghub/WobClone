import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import covers from '../../assets/images';
import CartIcon from '../../assets/svg/CartIcon';
import CartContext from '../../contexts/cartContext';
import { ProductModel } from '../../types/types';
import styles from './ProductCard.module.scss';

const { author, card, cardCover, cardFull, picture, price, productDetails, title } = styles;
const { toCartBtn } = styles;

type cardStyleVersionType = 'full' | 'cover';

interface ProductCardType {
  ebook: ProductModel,
  cardStyleVersion: cardStyleVersionType,
  itemWidth?: number,
}

const ProductCard: React.FC<ProductCardType> = ({ ebook, cardStyleVersion, itemWidth }) => {
  const cartCtx = useContext(CartContext);

  const sortedCovers = [...ebook.cover].sort((a, b) => a.cover_size - b.cover_size);

const breakpoints = [600, 1000, 1400];

const adjustedCovers = breakpoints.map((bp, index) => ({
  media: `(min-width: ${bp}px)`,
  srcSet: sortedCovers[index]?.cover_url || sortedCovers[sortedCovers.length - 1]?.cover_url || covers.get('default')?.medium,
}));

const defaultCover = sortedCovers[0]?.cover_url || covers.get('default')?.small;
 
  const authors = ebook.author.map((author) => `${author.author_name}`).join('-');

  return (
    <li className={`${card} ${cardStyleVersion === 'cover' ? cardCover : cardFull}`} style={{ width: `${itemWidth}px` }}>

      <Link to={`/ebook/${ebook.title}-${authors}`} state={{ product: ebook }}>

      <picture>
        {adjustedCovers.map((cover, index) => (
          <source key={`${cover.srcSet}${index}`} srcSet={cover.srcSet} media={cover.media} />
        ))}
        <img src={defaultCover} className={picture} alt={`${ebook.title} - okładka`} loading="lazy" />
      </picture>

        <div className={productDetails}>
          <h3 className={title}>{ebook.title}</h3>
          <cite className={author}>{`${authors}`}</cite>
          <div className={price}>{`${ebook.price} zł`}</div>
        </div>
      </Link>

      {/* --- BUTTON ADD TO CART ---  */}
      <button className={toCartBtn} onClick={() => cartCtx.addToCart(ebook)}>
        <CartIcon width={26} height={26} strokeColor='white' />
      </button>
    </li>
  );
}

export default ProductCard;