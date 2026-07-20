import React from 'react';
import { useLocation } from 'react-router-dom';
import useWidth from '../../hooks/useWidth';
import { useAppDispatch, useAppSelector } from '../../types/hooks';

import { setShowSidePanel, setSidePanelContent, setExtendPanel, selectExtendPanel } from './productDetailsSlice';

import covers from '../../assets/images';
import ChevronRight from '../../assets/svg/ChevronRight';
import { ProductModel } from '../../types/types';
import BuyBtn from './BuyBtn';
import styles from './ProductDetails.module.scss';
import { Rating } from './Rating';
import { SidePanel } from './SidePanel';
import { BREAKPOINTS } from '../../constants/breakpoints';

const { ellipsis, indent, picture, productInfo, productTitle, productRating, productDescription, section, sectionContent, sidePanelArrow, wrapper, wrapperExtended } = styles;

const ProductDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { currWidth } = useWidth();
  const isExtended = useAppSelector(selectExtendPanel);
  const product: ProductModel = location.state.product;
  const productAuthors = product?.author.map(author => author.author_name).join(", ");
  const productCovers = [...product.cover].sort((a, b) => a.cover_size - b.cover_size);
  const coverSmall = productCovers[0] || covers.get('default')?.small;
  const coverMedium = productCovers[1] || covers.get('default')?.medium;

  // const showSidePanel = (params: { title: string, subtitle: string | null, body: string }) => {
  //   dispatch(setShowSidePanel());
  //   dispatch(setSidePanelContent(params))
  // }
  const extendPanel = () => {
    dispatch(setExtendPanel());
  }


  return <>
    {product && currWidth < BREAKPOINTS.desktop ? <picture >
      <img src={`${coverMedium}`} className={picture} alt="Product Image" />
    </picture> : null}

    {<div className={`${wrapper} ${isExtended ? wrapperExtended : ''}`}>

      {currWidth >= BREAKPOINTS.desktop && <img src={`${coverMedium}`} className={picture} alt="Product Image" />}

      <BuyBtn product={product} />

      <section className={`${section} ${productInfo}`}>
        <h1 className={productTitle}>{product?.title}</h1>
        <article className={sectionContent}>
          <table>
            <tbody>
              <tr>
                <td>Autor:</td>
                <td>{`${productAuthors}`}</td>
              </tr>
              <tr>
                <td>Wydawca:</td>
                <td>WobClone</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      {/* --- RATING --- */}
      <section className={`${section} ${productRating}`}>
        <h2>Ocena</h2>

        {/*  SHOW SIDE PANEL BTN  */}
        {/* <button className={sidePanelArrow}
          onClick={() => showSidePanel({
            title: 'Ocena',
            subtitle: null,
            body: 'rating',
          })}>

          <ChevronRight />
        </button> */}
        <button className={sidePanelArrow}
          onClick={() => extendPanel()}>
          <ChevronRight />
        </button>

        <article className={`${sectionContent} ${indent}`}>
          {product && <Rating isSidePanel={false} rating={product.rating} />}
        </article>

      </section>

      {/* --- DESCRIPTION --- */}
      <section className={`${section} ${productDescription}`}>
        <h2>Opis</h2>
        {/*  SHOW SIDE PANEL BTN  */}
        {/* <button className={sidePanelArrow}
          onClick={() => showSidePanel({
            title: product.title,
            subtitle: `${productAuthors}`,
            body: product.description,
          })}>

          <ChevronRight />
        </button> */}

        <article className={`${sectionContent} ${indent} ${currWidth < BREAKPOINTS.desktop ? ellipsis : null}`}>
          {product?.description}
        </article>
      </section>

      {currWidth < BREAKPOINTS.desktop && <SidePanel product={product} />}
    </div>
    }
  </>

}

export default ProductDetails;