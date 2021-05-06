import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { selectProduct, selectShowSidePanel } from './productPageSlice';
import { fetchProduct, setShowSidePanel } from './productPageSlice';

import SidePanel from './SidePanel';

import styles from './ProductPage.module.scss';

const { ellipsis, indent, section, sectionContent, sidePanelArrow, starIcon, starFilled, wrapper } = styles;

function ProductPage(props) {
  const [ratingStarsArr, setRatingStarsArr] = useState([]);
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const isVisible = useSelector(selectShowSidePanel);
  const { tags } = useParams();
  const { title, authorFirstName, authorLastName } = props.location.state;

  const rating = 9;

  useEffect(() => {
    fillRatingStars(rating, 10, 5);
  }, [])

  useEffect(() => {
    dispatch(fetchProduct({ title, authorFirstName, authorLastName }));
  }, [])

  const showSidePanel = () => {
    dispatch(setShowSidePanel());
  }

  //scaling rating system to stars count and filling them with color
  const fillRatingStars = (rating, maxRating, starsCount) => {
    const scaledRating = Math.ceil(rating / maxRating * starsCount);
    const arr = [];

    for (let i = 1; i <= starsCount; i++) {
      const starFill = i <= scaledRating ? starFilled : null;
      arr.push(
        <svg className={`${starIcon} ${starFill}`} key={i}>
          <use href="#star" />
        </svg>)
    }
    setRatingStarsArr(arr);
  }

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
                  <td>Wydawnictwo</td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>

        {/* RATING */}
        <section className={section}>
          <h2>Ocena</h2>
          <button className={sidePanelArrow} onClick={showSidePanel}>
            <svg id="i-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 30 L24 16 12 2" />
            </svg>
          </button>

          <article className={`${sectionContent} ${indent}`}>
            <h3>{product.title}</h3>
            <svg id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" style={{ display: 'none' }}>
              <symbol id="star">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
              </symbol>
            </svg>
            {ratingStarsArr}
          </article>
        </section>

        {/* DESCRIPTION */}
        <section className={section}>
          <h2>Opis</h2>
          <button className={sidePanelArrow} onClick={showSidePanel}>
            <svg id="i-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 30 L24 16 12 2" />
            </svg>
          </button>
          <article className={`${sectionContent} ${indent} ${ellipsis}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores culpa eligendi necessitatibus ipsa suscipit quaerat ut error eius reprehenderit iste dolores, repellendus exercitationem quasi nam ipsum, porro incidunt quas! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero similique facilis itaque pariatur, sint tempore, harum, nisi doloremque architecto modi illo tenetur odit debitis ipsum distinctio id et sequi praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam odit aspernatur, in cupiditate quidem assumenda dolorum autem tempore sunt nihil maxime quaerat temporibus amet fugit totam voluptatum exercitationem. Perspiciatis.
          </article>
        </section>
        <SidePanel />
      </div>
      }
    </React.Fragment>
  );
}

export default ProductPage;