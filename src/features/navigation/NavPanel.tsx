import { useAppSelector, useAppDispatch } from '../../types/hooks';

import { showNavSidePanel, showCatSidePanel } from './navigationSlice';
import { selectIsVisibleNavSP, selectIsVisibleCatSP } from './navigationSlice';

import { NavItem } from './NavItem';
import Backdrop from '../../components/backdrop/Backdrop';

import CloseIcon from '../../assets/svg/CloseIcon';
import styles from './NavPanel.module.scss';

const { header, linksContainer, productType, sidePanel, showSidePanel, closeIcon } = styles;

function NavPanel() {
  const isVisible = useAppSelector(selectIsVisibleNavSP);
  const isVisibleCat = useAppSelector(selectIsVisibleCatSP);
  const dispatch = useAppDispatch();

  return (
    <>
      {isVisible ? <Backdrop /> : null}
      <nav className={`${sidePanel} ${isVisible ? showSidePanel : null}`} >
        <div className={header}>
          <div className={productType}>Ebooki</div>
          <div className={closeIcon} onClick={() => dispatch(showNavSidePanel())}>
            <CloseIcon />
          </div>
        </div>
        <div className={`${linksContainer}`}>
          <NavItem urlTag="Kategorie" extend={true}
            onClick={() => { dispatch(showCatSidePanel()); dispatch(showNavSidePanel()) }}
            onClickDesktop={() => { return isVisibleCat ? null : dispatch(showCatSidePanel()) }}
          />
          <NavItem urlTag="Wszystkie Ebooki" tag='' onClick={() => { dispatch(showNavSidePanel()) }} />
          <NavItem urlTag="Promocje" onClick={() => { dispatch(showNavSidePanel()) }} />
          <NavItem urlTag="Nowości" onClick={() => { dispatch(showNavSidePanel()) }} />
          <NavItem urlTag="Top 100" onClick={() => { dispatch(showNavSidePanel()) }} />
          <NavItem urlTag="Darmowe ebooki" onClick={() => { dispatch(showNavSidePanel()) }} />
        </div>
      </nav>

    </>
  );
}

export default NavPanel;
