import ChevronLeft from '../../assets/svg/ChevronLeft';
import ChevronRight from '../../assets/svg/ChevronRight';
import styles from './Pagination.module.scss';

const { dots, paginationWrapper } = styles;

export interface PaginationProps {
  pagesCount: number,
  ebooksForScreenArrLength: number,
  page: number,
  setPage: (value: number | ((prevVar: number) => number)) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pagesCount, ebooksForScreenArrLength, page, setPage }) => {

  const handleSetPage = (e: any) => {
    setPage(e.target.innerText * 1)
  }

  return <>
    {ebooksForScreenArrLength > 0 && <ul className={paginationWrapper}>

      <li onClick={() => { return page <= 1 ? null : setPage(prevPage => --prevPage) }}>
        <ChevronLeft width={20} height={20} />
      </li>

      <li onClick={() => setPage(1)}><span>1</span></li>

      {page > 4 ? <li className={dots}><span>...</span></li> : null}
      {pagesCount > 1 ? <li onClick={handleSetPage}><span>{page <= 4 ? 2 : (page >= pagesCount - 3) ? pagesCount - 5 : page - 2}</span></li> : null}
      {pagesCount > 2 ? <li onClick={handleSetPage}><span>{page <= 4 ? 3 : (page >= pagesCount - 3) ? pagesCount - 4 : page - 1}</span></li> : null}
      {pagesCount > 3 ? <li onClick={handleSetPage}><span>{page <= 4 ? 4 : (page >= pagesCount - 3) ? pagesCount - 3 : page}</span></li> : null}
      {pagesCount > 4 ? <li onClick={handleSetPage}><span>{page <= 4 ? 5 : (page >= pagesCount - 3) ? pagesCount - 2 : page + 1}</span></li> : null}
      {pagesCount > 5 ? <li onClick={handleSetPage}><span>{(page <= 4) ? 6 : (page >= pagesCount - 3) ? pagesCount - 1 : page + 2}</span></li> : null}
      {page < pagesCount - 3 ? <li className={dots}><span>...</span></li> : null}

      {pagesCount > 5 ? <li onClick={() => setPage(pagesCount)}><span>{pagesCount}</span></li> : null}

      <li onClick={() => { return page >= pagesCount ? null : setPage(prevPage => ++prevPage) }} >
        <ChevronRight />
      </li>
    </ul>}
  </>
}

export default Pagination;