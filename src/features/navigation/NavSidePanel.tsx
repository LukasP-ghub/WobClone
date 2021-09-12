import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';

import { showNavSidePanel, showCatSidePanel } from './navigationSlice';
import { selectIsVisibleNavSP, selectIsVisibleCatSP } from './navigationSlice';

import NavComponent from './NavComponent';
import Backdrop from '../../commonComponents/backdrop/Backdrop';

import CloseIcon from '../../assets/svg/CloseIcon';
import addDynamicStyles from '../../helpers/addDynamicStyles';
import styles from './NavSidePanel.module.scss';

const { header, linksContainer, productType, sidePanel, showSidePanel, closeIcon } = styles;

function NavSidePanel() {
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
          <NavComponent name="Kategorie" extended={true}
            onClick={() => { dispatch(showCatSidePanel()); dispatch(showNavSidePanel()) }}
            onClickDesktop={() => { return isVisibleCat ? null : dispatch(showCatSidePanel()) }}
            transDelay={100} />
          <NavComponent name="Wszystkie Ebooki" onClick={() => { dispatch(showNavSidePanel()) }} transDelay={200} />
          <NavComponent name="Promocje" onClick={() => { dispatch(showNavSidePanel()) }} transDelay={300} />
          <NavComponent name="Nowości" onClick={() => { dispatch(showNavSidePanel()) }} transDelay={400} />
          <NavComponent name="Top 100" onClick={() => { dispatch(showNavSidePanel()) }} transDelay={500} />
          <NavComponent name="Darmowe ebooki" onClick={() => { dispatch(showNavSidePanel()) }} transDelay={600} />
        </div>
      </nav>

    </>
  );
}

export default NavSidePanel;
