import { useAppDispatch, useAppSelector } from '../../types/hooks';

import { useLocation } from 'react-router-dom';
import { useGetCountOfEbooksQuery, useGetEbooksQuery, useGetPromotionsQuery } from '../../services/apiSlice';
import { selectFilters, setFilters } from './catalogSlice';


import ProductCard from '../../components/productCard/ProductCard';
import { ActiveFilters } from './ActiveFilters';
import styles from './Catalog.module.scss';
import { CategoriesList } from './CategoriesList';
import FilterOptions from './FilterOptions';
import Pagination from './Pagination';

const { containerCards, containerCardsWrapper, wrapper } = styles;


const Catalog: React.FC = () => {
  const filters = useAppSelector(selectFilters);
  const { data: ebooksCatalog = [] } = useGetEbooksQuery(filters);
  const { data: ebooksCount=0 } = useGetCountOfEbooksQuery(filters);
  const { data: promotionsData } = useGetPromotionsQuery('');
  //const [page, setPage] = useState<number>(1);
  const location = useLocation();

  const dispatch = useAppDispatch();
  //const filteredProducts = useAppSelector(selectFilteredProducts);
  const searchQuery = location.search;
  //const filterTag: string = location.state?.tag ?? '';

  let itemsPerPage = filters.limit || 4;
  let page: number = filters.page || 1;
  let pagesCount: number = Math.ceil(ebooksCount / itemsPerPage) || 0;
 
  const setPage = (page: number, limit:number) => {
    dispatch(setFilters({ page: page, limit: limit }));
  }

  return (
    <div className={wrapper}>
      <ActiveFilters />
      <div className={containerCardsWrapper}>
        <ul className={containerCards}>
          {ebooksCatalog.length > 0 && ebooksCatalog.map(ebook => {
            return <ProductCard key={ebook.ebook_id} ebook={ebook} cardStyleVersion='full' />
          })}
        </ul>
        {ebooksCount && <Pagination pagesCount={pagesCount} page={page} itemsPerPage={itemsPerPage} setPage={setPage} />}
      </div>

      <FilterOptions />
      <CategoriesList />
    </div>
  );
}

export default Catalog;

