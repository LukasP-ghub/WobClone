import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';

import { selectProduct } from './productPageSlice';
import { fetchProduct, setShowSidePanel, setSidePanelContent } from './productPageSlice';

import SidePanel from './SidePanel';
import ProductRating from './ProductRating';

import styles from './ProductPage.module.scss';

const { ellipsis, indent, section, sectionContent, sidePanelArrow, wrapper } = styles;

const ProductPage: React.FC<{ location: any }> = ({ location }) => {

  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProduct);
  const { id } = location.state;

  const showSidePanel = (params: { title: string, subtitle: string | null, body: string }) => {
    dispatch(setShowSidePanel());
    dispatch(setSidePanelContent(params))
  }

  useEffect(() => {
    dispatch(fetchProduct({ id }));
  }, [dispatch, id])

  return (
    <React.Fragment>
      {product && <div className={wrapper}>
        <section className={section}>
          <h1>{product.title}</h1>
          <article className={sectionContent}>
            <table>
              <tbody>
                <tr>
                  <td>Autor:</td>
                  <td>{`${product.author.firstName} ${product.author.lastName}`}</td>
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
        <section className={section}>
          <h2>Ocena</h2>

          {/*  SHOW SIDE PANEL BTN  */}
          <button className={sidePanelArrow}
            onClick={() => showSidePanel({
              title: 'Ocena',
              subtitle: null,
              body: 'rating',
            })}>

            <svg id="i-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 30 L24 16 12 2" />
            </svg>
          </button>

          {/*  CONTENT  */}
          <article className={`${sectionContent} ${indent}`}>
            <h3>{product.title}</h3>
            {product && <ProductRating isSidePanel={false} />}
          </article>

        </section>

        {/* --- DESCRIPTION --- */}
        <section className={section}>
          <h2>Opis</h2>
          {/*  SHOW SIDE PANEL BTN  */}
          <button className={sidePanelArrow}
            onClick={() => showSidePanel({
              title: product.title,
              subtitle: `${product.author.firstName} ${product.author.lastName}`,
              body: product.description,
            })}>

            <svg id="i-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 30 L24 16 12 2" />
            </svg>
          </button>
          {/* CONTENT */}
          <article className={`${sectionContent} ${indent} ${ellipsis}`}>
            {product.description}
          </article>
        </section>
        {<SidePanel />}
      </div>
      }
    </React.Fragment>
  );
}

export default ProductPage;