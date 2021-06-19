import { lazy, Suspense } from 'react';
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';

import { showNavSidePanel, showCatSidePanel } from './navigationSlice';
import { selectIsVisibleNavSP, selectIsVisibleCatSP } from './navigationSlice';

import NavComponent from './NavComponent';

import CloseIcon from '../../assets/svg/CloseIcon';
import styles from './NavSidePanel.module.scss';

const Backdrop = lazy(() => import('../../commonComponents/backdrop/Backdrop'));

const { header, productType, sidePanel, showSidePanel, closeIcon } = styles;

function NavSidePanel() {
  const isVisible = useAppSelector(selectIsVisibleNavSP);
  const isVisibleCat = useAppSelector(selectIsVisibleCatSP);
  const dispatch = useAppDispatch();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {isVisible ? <Backdrop /> : null}
        <nav className={`${sidePanel} ${isVisible ? showSidePanel : null}`} >
          <div className={header}>
            <div className={productType}>Ebooki</div>
            <div className={closeIcon} onClick={() => dispatch(showNavSidePanel())}>
              <CloseIcon />
            </div>
          </div>
          <NavComponent name="Kategorie" extended={true}
            onClick={() => { dispatch(showCatSidePanel()); dispatch(showNavSidePanel()) }}
            onClickDesktop={() => { return isVisibleCat ? null : dispatch(showCatSidePanel()) }} />
          <NavComponent name="Wszystkie Ebooki" onClick={() => { dispatch(showNavSidePanel()) }} />
          <NavComponent name="Promocje" onClick={() => { dispatch(showNavSidePanel()) }} />
          <NavComponent name="Nowości" onClick={() => { dispatch(showNavSidePanel()) }} />
          <NavComponent name="Top 100" onClick={() => { dispatch(showNavSidePanel()) }} />
          <NavComponent name="Darmowe ebooki" onClick={() => { dispatch(showNavSidePanel()) }} />
        </nav>
      </Suspense>
    </>
  );
}

export default NavSidePanel;
