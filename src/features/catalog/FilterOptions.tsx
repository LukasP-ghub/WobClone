import { Link } from 'react-router-dom';
import ChevronLeft from '../../assets/svg/ChevronLeft';
import { useGetCategoriesQuery } from '../../services/apiSlice';
import { useAppDispatch, useAppSelector } from '../../types/hooks';
import { selectFilters, selectOnPromotion, selectShowFilterOptions, setFilters, setOnPromotion, setShowCategoriesPanel, setShowFilterOptions } from './catalogSlice';
import styles from './FilterOptions.module.scss';

const { arrow, clearFiltersBtn, filter, filtersGroup, flexVCenter, optionsGroup, panelHead, shiftBtn, shiftBtnActive, show, showCategoryListBtn, title, titleWrap, wrapper } = styles;

const FilterOptions: React.FC = () => {
  const { data: categories = [] } = useGetCategoriesQuery('');
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(selectShowFilterOptions);
  const filters = useAppSelector(selectFilters);
  const onPromotion = useAppSelector(selectOnPromotion);

  return (
    <>
      <div className={`${panelHead} ${isVisible ? show : null}`}>
        <div className={titleWrap} onClick={() => dispatch(setShowFilterOptions())}>
          <div className={arrow}><ChevronLeft /></div>
          <h2>Filtry i kategorie</h2>
        </div>
        <button className={clearFiltersBtn}>Wyczyść filtry</button>
      </div>

      <div className={`${wrapper} ${isVisible ? show : null}`}>
        <div className={`${optionsGroup} ${flexVCenter}`}>
          <h3 className={title}>Tylko w promocji</h3>
          <button className={`${shiftBtn} ${onPromotion === true ? shiftBtnActive : null}`} onClick={() => dispatch(setOnPromotion(!onPromotion))} />
        </div>

        <div className={optionsGroup}>
          <h3 className={title}>Sortuj wg.</h3>
          <ul className={filtersGroup}>
            <li className={filter}><Link to={'?sort=lower-price'}><span>Najniższa cena</span></Link></li>
            <li className={filter}><Link to={'?sort=higher-price'}><span>Nawyższa cena</span></Link></li>
            <li className={filter}><Link to={'?sort=oldest'}><span>Najstarsze</span></Link></li>
          </ul>
        </div>

        <div className={optionsGroup}>
          <h3 className={title}>Polecane</h3>
          <button className={showCategoryListBtn} onClick={() => dispatch(setShowCategoriesPanel())}>Lista</button>

          <ul className={filtersGroup}>
            {categories.map(category => {
              return (category.popular &&
                <li className={filter} key={category.category_id}>
                  {<Link to={'/catalog/' + category.category_name}
                    onClick={() => dispatch(setFilters({ category: category.category_name }))}>
                    <span>{category.category_name}</span>
                  </Link>}
                </li>)
            })}
          </ul>
        </div>

      </div>
    </>
  );
}

export default FilterOptions;