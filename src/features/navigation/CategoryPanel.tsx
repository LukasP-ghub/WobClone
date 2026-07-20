import { useEffect, useRef } from 'react';
import { MQBreakpoints } from '../../constants/constants';
import useWidth from '../../hooks/useWidth';
import { useGetCategoriesQuery } from '../../services/apiSlice';
import { useAppDispatch, useAppSelector } from '../../types/hooks';
import { selectIsVisibleCatSP, showCatSidePanel } from './navigationSlice';

import ChevronLeft from '../../assets/svg/ChevronLeft';
import Backdrop from '../../components/backdrop/Backdrop';
import { NavItem } from './NavItem';

import styles from './CategoryPanel.module.scss';
const { categorySidePanel, linksContainer, showSidePanel, headElement, content, arrowLeft } = styles;

function CategoryPanel() {
  const isInitialRender = useRef(true);
  const { data: categoryData } = useGetCategoriesQuery('');
  const isVisibleCat = useAppSelector(selectIsVisibleCatSP);
  const dispatch = useAppDispatch();
  const { currWidth } = useWidth();

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }   
    if (isVisibleCat && currWidth >= MQBreakpoints.DESKTOP) {
      const handleWindowClick = () => dispatch(showCatSidePanel());
      // Opóźniamy dodanie listenera, by nie reagował na kliknięcie otwierające panel
      setTimeout(() => {
        window.addEventListener('click', handleWindowClick, { once: true });
      }, 0);
      return () => window.removeEventListener('click', handleWindowClick);
    }
  }, [isVisibleCat])

  return (
    <>
      {isVisibleCat && currWidth < MQBreakpoints.DESKTOP ? <Backdrop /> : null}
      <div className={`${categorySidePanel} ${isVisibleCat ? showSidePanel : null}`}>
        <div className={headElement} onClick={() => dispatch(showCatSidePanel())}>
          <div className={content}><span className={arrowLeft}><ChevronLeft /></span> Powrót</div>
        </div>
        <div className={linksContainer}>
          {categoryData ? categoryData.map((item) => { return <NavItem key={item.category_id} urlTag={item.category_name} onClick={() => dispatch(showCatSidePanel())} /> }) : null}
        </div>
      </div>
    </>
  );
}

export default CategoryPanel;