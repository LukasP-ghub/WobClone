import { useRef } from 'react';
import ChevronLeft from '../../assets/svg/ChevronLeft';
import ChevronRight from '../../assets/svg/ChevronRight';
import styles from './Pagination.module.scss';

const { active, dots, paginationWrapper } = styles;

export interface PaginationProps {
  pagesCount: number,
  page: number,
  itemsPerPage: number,
  setPage: (page: number, limit:number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pagesCount, page, itemsPerPage, setPage }) => {
  const liRef = useRef<HTMLLIElement[]>([]);
  const handleSetPage = (e: any) => {
    setPage(e.target.innerText * 1, itemsPerPage);
  }

  //turnPage function
  const handleTurnPage = (turn:number) => {
    setPage(page+turn, itemsPerPage);
  }

  return (
    <ul className={paginationWrapper}>
      <li onClick={() => { return page <= 1 ? null : handleTurnPage(-1) }} >
        <ChevronLeft />
      </li>

      {page > 3 ? <li onClick={handleSetPage} ref={(e: any) => liRef.current[0] = e}><span>1</span></li> : null}

      {page > 3 ? <li className={dots}><span>...</span></li> : null}
      {page > 2 ? <li onClick={handleSetPage} ref={(e: any) => liRef.current[1] = e}><span>{page - 2}</span></li> : null}
      {page > 1 ? <li onClick={handleSetPage} ref={(e: any) => liRef.current[2] = e}><span>{page - 1}</span></li> : null}
      <li className={active} onClick={handleSetPage} ref={(e: any) => liRef.current[3] = e}><span>{page}</span></li>
      {pagesCount - page >= 1 ? <li onClick={handleSetPage} ref={(e: any) => liRef.current[4] = e}><span>{page + 1}</span></li> : null}
      {pagesCount - page > 2 ? <li onClick={handleSetPage} ref={(e: any) => liRef.current[5] = e}><span>{page + 2}</span></li> : null}
      {pagesCount - page > 3 ? <li className={dots}><span>...</span></li> : null}

      {pagesCount - page > 1 ? <li onClick={handleSetPage} ref={(e: any) => liRef.current[6] = e}><span>{pagesCount}</span></li> : null}

      <li onClick={() => { return page >= pagesCount ? null : handleTurnPage(1)}} >
        <ChevronRight />
      </li>
    </ul>
  )
}

export default Pagination;