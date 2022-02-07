import React from 'react';
import { useAppDispatch } from '../../types/hooks';
import useWidth from '../../hooks/useWidth';

import { setShowSidePanel, setSidePanelContent } from './productDetailsSlice';

import { ProductModel } from '../../types/types';
import covers from '../../assets/images'
import ChevronRight from '../../assets/svg/ChevronRight';
import { SidePanel } from './SidePanel';
import { Rating } from './Rating';
import BuyBtn from './BuyBtn';
import styles from './ProductDetails.module.scss';

const { ellipsis, indent, picture, productInfo, productRating, productDescription, section, sectionContent, sidePanelArrow, wrapper } = styles;

const ProductDetails: React.FC<{ location: any }> = ({ location }) => {
  const dispatch = useAppDispatch();
  const { currWidth } = useWidth();
  const product: ProductModel = location.state.product;
  const cover = covers.get(product?.cover) || { small: '', medium: '' };

  const showSidePanel = (params: { title: string, subtitle: string | null, body: string }) => {
    dispatch(setShowSidePanel());
    dispatch(setSidePanelContent(params))
  }


  return <>
    {product && currWidth < 950 ? <picture >
      <img src={`${cover.medium}`} className={picture} alt="" />
    </picture> : null}

    {<div className={wrapper}>

      {currWidth >= 950 && <img src={`${cover.medium}`} className={picture} alt="" />}

      <BuyBtn product={product} />

      <section className={`${section} ${productInfo}`}>
        <h1>{product?.title}</h1>
        <article className={sectionContent}>
          <table>
            <tbody>
              <tr>
                <td>Autor:</td>
                <td>{`${product?.author.firstName} ${product?.author.lastName}`}</td>
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
        <button className={sidePanelArrow}
          onClick={() => showSidePanel({
            title: 'Ocena',
            subtitle: null,
            body: 'rating',
          })}>

          <ChevronRight />
        </button>

        <article className={`${sectionContent} ${indent}`}>
          <h3>{product?.title}</h3>
          {product && <Rating isSidePanel={false} rating={product.rating} />}
        </article>

      </section>

      {/* --- DESCRIPTION --- */}
      <section className={`${section} ${productDescription}`}>
        <h2>Opis</h2>
        {/*  SHOW SIDE PANEL BTN  */}
        <button className={sidePanelArrow}
          onClick={() => showSidePanel({
            title: product.title,
            subtitle: `${product.author.firstName} ${product.author.lastName}`,
            body: product.description,
          })}>

          <ChevronRight />
        </button>

        <article className={`${sectionContent} ${indent} ${currWidth < 950 ? ellipsis : null}`}>
          {product?.description}
        </article>
      </section>

      {currWidth < 950 && <SidePanel product={product} />}
    </div>
    }
  </>

}

export default ProductDetails;