import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { useParams } from "react-router-dom";

import { selectProduct, selectShowSidePanel } from './productPageSlice';
import { fetchProduct, setShowSidePanel, setSidePanelContent } from './productPageSlice';

import SidePanel from './SidePanel';
import ProductRating from './ProductRating';

import styles from './ProductPage.module.scss';

const { ellipsis, indent, section, sectionContent, sidePanelArrow, wrapper } = styles;

function ProductPage(props) {

  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const isVisible = useSelector(selectShowSidePanel);
  // const { tags } = useParams();
  const { id } = props.location.state;

  const showSidePanel = (params) => {
    dispatch(setShowSidePanel());
    dispatch(setSidePanelContent(params))
  }

  useEffect(() => {
    dispatch(fetchProduct({ id }));
  }, [])

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
            {product && <ProductRating />}
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