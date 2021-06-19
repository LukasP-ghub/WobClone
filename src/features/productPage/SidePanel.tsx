import { lazy, Suspense } from 'react';
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';

import { selectShowSidePanel, selectSidePanelContent } from './productPageSlice';
import { setShowSidePanel } from './productPageSlice';

import ChevronLeft from '../../assets/svg/ChevronLeft';
import styles from './SidePanel.module.scss';

const ProductRating = lazy(() => import('./ProductRating'));

const { content, header, headerContent, headerContentWrapper, showPanel, wrapper, iChevronLeft, } = styles;


function SidePanel() {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(selectShowSidePanel);
  const { title, subtitle, body } = useAppSelector(selectSidePanelContent);

  const checkShowPanel = isVisible ? showPanel : null;

  const showSidePanel = () => {
    dispatch(setShowSidePanel());
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <header className={`${header} ${checkShowPanel}`} >
          <button className={iChevronLeft} onClick={showSidePanel}>
            <ChevronLeft />
          </button>
          <div className={headerContentWrapper}>
            <div className={headerContent} >
              {title}
            </div>
            {subtitle && <div className={headerContent}>
              {subtitle}
            </div>}
          </div>
        </header>

        {/* BODY */}
        <div className={`${wrapper} ${checkShowPanel}`} >

          <div className={content}>
            {body === 'rating' ? <ProductRating isSidePanel={true} /> : body}
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default SidePanel;