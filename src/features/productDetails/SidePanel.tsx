import { useAppSelector, useAppDispatch } from '../../types/hooks';

import { selectShowSidePanel, selectSidePanelContent } from './productDetailsSlice';
import { setShowSidePanel } from './productDetailsSlice';

import ChevronLeft from '../../assets/svg/ChevronLeft';
import { Rating } from './Rating';
import styles from './SidePanel.module.scss';
import { ProductModel } from '../../types/types';

const { content, header, headerContent, headerContentWrapper, showPanel, wrapper, iChevronLeft, } = styles;

interface SidePanelProps {
  product: ProductModel,
}

export const SidePanel: React.FC<SidePanelProps> = ({ product }) => {
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
          {body === 'rating' ? <Rating isSidePanel={true} rating={product.rating} /> : body}
        </div>
      </div>
    </>
  );
}