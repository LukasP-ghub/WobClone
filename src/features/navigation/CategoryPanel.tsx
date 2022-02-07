import { useEffect } from 'react';
import { showCatSidePanel } from './navigationSlice';
import { selectIsVisibleCatSP } from './navigationSlice';
import { useGetCategoriesQuery } from '../../services/apiSlice';
import useWidth from '../../hooks/useWidth';
import { MQBreakpoints } from '../../constants/constants';
import { useAppSelector, useAppDispatch } from '../../types/hooks';
import { ProductCategories } from '../../types/types';

import ChevronLeft from '../../assets/svg/ChevronLeft';
import { NavItem } from './NavItem';
import Backdrop from '../../components/backdrop/Backdrop';

import styles from './CategoryPanel.module.scss';
const { categorySidePanel, linksContainer, showSidePanel, headElement, content, arrowLeft } = styles;

function CategoryPanel() {
  const { data: categoryData } = useGetCategoriesQuery('');
  const isVisibleCat = useAppSelector(selectIsVisibleCatSP);
  const dispatch = useAppDispatch();
  const { currWidth } = useWidth();

  useEffect(() => {
    if (isVisibleCat && currWidth >= MQBreakpoints.DESKTOP) window.addEventListener('click', () => dispatch(showCatSidePanel()), { once: true });
  }, [isVisibleCat])

  return (
    <>
      {isVisibleCat && currWidth < MQBreakpoints.DESKTOP ? <Backdrop /> : null}
      <div className={`${categorySidePanel} ${isVisibleCat ? showSidePanel : null}`}>
        <div className={headElement} onClick={() => dispatch(showCatSidePanel())}>
          <div className={content}><span className={arrowLeft}><ChevronLeft /></span> Powrót</div>
        </div>
        <div className={linksContainer}>
          {categoryData ? categoryData.map((item) => { return <NavItem key={item.category} urlTag={item.category} onClick={() => dispatch(showCatSidePanel())} /> }) : null}
        </div>
      </div>
    </>
  );
}

export default CategoryPanel;