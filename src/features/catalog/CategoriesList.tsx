import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../types/hooks';
import { useGetCategoriesQuery } from '../../services/apiSlice';
import { setShowCategoriesPanel, setFilters } from './catalogSlice';
import { selectShowCategoriesPanel } from './catalogSlice';
import ChevronLeft from '../../assets/svg/ChevronLeft';
import styles from './CategoriesList.module.scss';

const { arrow, categoryList, catListItemLink, catListItemWarp, clearFiltersBtn, panelHead, show, titleWrap, wrapper } = styles;

export const CategoriesList: React.FC = () => {
  const { data: categories = [] } = useGetCategoriesQuery('');
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(selectShowCategoriesPanel);
  const showClass = isVisible ? show : null;
  return (
    <>
      <div className={`${panelHead} ${showClass}`}  >
        <div className={titleWrap} onClick={() => dispatch(setShowCategoriesPanel())}>
          <div className={arrow}><ChevronLeft /></div>
          <h2>Kategorie</h2>
        </div>
        <button className={clearFiltersBtn}>Wyczyść filtry</button>
      </div>

      <div className={`${wrapper} ${showClass}`}>
        <ul className={categoryList}>
          <li className={`${catListItemWarp}`}><h3>Popularne kategorie</h3></li>

          {categories.map((category) => {
            return category.popular &&
              <li key={category.category} className={`${catListItemWarp} ${showClass}`}>

                {<Link to={'/catalog/' + category.category} className={catListItemLink}
                  onClick={() => dispatch(setFilters({ filter: 'category', value: category.category }))}>
                  {category.category}
                </Link>}

              </li>
          })}
        </ul>

        <ul className={categoryList}>
          <li className={catListItemWarp}><h3>Wszystkie kategorie</h3></li>

          {categories.map(category => (
            <li key={category.category} className={`${catListItemWarp} ${showClass}`}>

              {<Link to={`${category.category}`} className={catListItemLink}
                onClick={() => dispatch(setFilters({ filter: 'category', value: category.category }))}>
                {category.category}
              </Link>}

            </li>))}
        </ul>

      </div>
    </>
  );
}