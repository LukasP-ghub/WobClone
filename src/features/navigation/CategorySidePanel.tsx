import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';
import { showCatSidePanel } from './navigationSlice';
import { selectIsVisibleCatSP, selectCategories, selectError } from './navigationSlice';
import useWidth from '../../helpers/useWidth';

import Backdrop from '../../commonComponents/backdrop/Backdrop';
import ShowError from '../../commonComponents/showError/ShowError';
import NavComponent from './NavComponent';
import styles from './CategorySidePanel.module.scss';

const { categorySidePanel, showSidePanel, headElement, content } = styles;

function CategoryPanel() {
  const isVisibleCat = useAppSelector(selectIsVisibleCatSP);
  const categories = useAppSelector(selectCategories)
  const fetchError = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  const { currWidth } = useWidth();

  useEffect(() => {
    if (isVisibleCat && currWidth >= 950) window.addEventListener('click', () => dispatch(showCatSidePanel()), { once: true });
  }, [isVisibleCat, dispatch])

  return (
    <>
      {isVisibleCat && currWidth < 950 ? <Backdrop /> : null}
      <div className={`${categorySidePanel} ${isVisibleCat ? showSidePanel : null}`}>
        <div className={headElement} onClick={() => dispatch(showCatSidePanel())}>
          <div className={content}>Powrót</div>
        </div>
        {fetchError ? <ShowError /> : categories.map(item => { return <NavComponent key={item.category} name={item.category} onClick={() => dispatch(showCatSidePanel())} /> })}
      </div>
    </>
  );
}

export default CategoryPanel;