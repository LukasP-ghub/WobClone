import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { selectProduct } from './productCardSlice';
import { fetchProduct } from './productCardSlice';

import styles from './ProductCard.module.scss';

const { indent, section, sectionContent, wrapper } = styles;

function ProductCard(props) {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const { title, authorFirstName, authorLastName } = props.location.state;
  let { tags } = useParams();

  useEffect(() => {
    dispatch(fetchProduct({ title, authorFirstName, authorLastName }));
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
                  <td>Wydawnictwo</td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>

        <section className={section}>
          <h2>Opis</h2>
          <article className={`${sectionContent} ${indent}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores culpa eligendi necessitatibus ipsa suscipit quaerat ut error eius reprehenderit iste dolores, repellendus exercitationem quasi nam ipsum, porro incidunt quas! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero similique facilis itaque pariatur, sint tempore, harum, nisi doloremque architecto modi illo tenetur odit debitis ipsum distinctio id et sequi praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam odit aspernatur, in cupiditate quidem assumenda dolorum autem tempore sunt nihil maxime quaerat temporibus amet fugit totam voluptatum exercitationem. Perspiciatis.
          </article>
        </section>
      </div>
      }
    </React.Fragment>
  );
}

export default ProductCard;