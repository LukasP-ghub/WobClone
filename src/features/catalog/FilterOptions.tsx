import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../types/hooks';
import { useGetCategoriesQuery } from '../../services/apiSlice';
import { setShowFilterOptions, setShowCategoriesPanel, setFilters } from './catalogSlice';
import { selectFilters, selectShowFilterOptions } from './catalogSlice';
import ChevronLeft from '../../assets/svg/ChevronLeft';
import styles from './FilterOptions.module.scss';

const { arrow, clearFiltersBtn, filter, filtersGroup, flexVCenter, optionsGroup, panelHead, shiftBtn, shiftBtnActive, show, showCategoryListBtn, title, titleWrap, wrapper } = styles;

const FilterOptions: React.FC = () => {
  const { data: categories = [] } = useGetCategoriesQuery('');
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(selectShowFilterOptions);
  const filters = useAppSelector(selectFilters);

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
          <button className={`${shiftBtn} ${filters.promotion === 'true' ? shiftBtnActive : null}`} onClick={() => dispatch(setFilters({ filter: 'promotion', value: filters.promotion === 'true' ? '' : 'true' }))} />
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
                <li className={filter} key={category.category}>
                  {<Link to={'/catalog/' + category.category}
                    onClick={() => dispatch(setFilters({ filter: 'category', value: category.category }))}>
                    <span>{category.category}</span>
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