import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';

import { selectShowSidePanel, selectSidePanelContent } from './productPageSlice';
import { setShowSidePanel } from './productPageSlice';

import ProductRating from './ProductRating';

import styles from './SidePanel.module.scss';

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
      <header className={`${header} ${checkShowPanel}`} >
        <svg id="i-chevron-left" className={iChevronLeft} onClick={showSidePanel} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M20 30 L8 16 20 2" />
        </svg>
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
    </>
  );
}

export default SidePanel;