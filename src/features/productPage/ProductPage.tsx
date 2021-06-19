import React, { lazy, Suspense, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';
import useWidth from '../../helpers/useWidth';

import { selectProduct, selectError } from './productPageSlice';
import { fetchProduct, setShowSidePanel, setSidePanelContent } from './productPageSlice';

import covers from '../../assets/images'
import ChevronRight from '../../assets/svg/ChevronRight';
import styles from './ProductPage.module.scss';

const ShowError = lazy(() => import('../../commonComponents/showError/ShowError'));
const SidePanel = lazy(() => import('./SidePanel'));
const ProductRating = lazy(() => import('./ProductRating'));
const ProductBuy = lazy(() => import('./ProductBuy'));

const { ellipsis, indent, picture, productInfo, productRating, productDescription, section, sectionContent, sidePanelArrow, wrapper } = styles;

const ProductPage: React.FC<{ location: any }> = ({ location }) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProduct);
  const fetchError = useAppSelector(selectError);
  const { id } = location.state;
  const cover = covers.get(product?.cover) || { small: '', medium: '' };
  const { currWidth } = useWidth();

  const showSidePanel = (params: { title: string, subtitle: string | null, body: string }) => {
    dispatch(setShowSidePanel());
    dispatch(setSidePanelContent(params))
  }

  useEffect(() => {
    dispatch(fetchProduct({ id }));
  }, [dispatch, id])

  return <>
    <Suspense fallback={<div>Loading...</div>}>
      {!fetchError && product && currWidth < 950 ? <picture >
        <img src={`${cover.medium}`} className={picture} alt="" />
      </picture> : null}

      {fetchError ? <ShowError /> : <div className={wrapper}>

        {currWidth >= 950 && <img src={`${cover.medium}`} className={picture} alt="" />}

        <ProductBuy />

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
            {product && <ProductRating isSidePanel={false} />}
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

        {currWidth < 950 && <SidePanel />}
      </div>
      }
    </Suspense>
  </>

}

export default ProductPage;