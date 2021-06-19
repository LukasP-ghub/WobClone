import { lazy, Suspense, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';
import { showCatSidePanel } from './navigationSlice';
import { selectIsVisibleCatSP, selectCategories, selectError } from './navigationSlice';
import useWidth from '../../helpers/useWidth';

import NavComponent from './NavComponent';
import styles from './CategorySidePanel.module.scss';

const Backdrop = lazy(() => import('../../commonComponents/backdrop/Backdrop'));
const ShowError = lazy(() => import('../../commonComponents/showError/ShowError'));

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
      <Suspense fallback={<div>Loading...</div>}>
        {isVisibleCat && currWidth < 950 ? <Backdrop /> : null}
        <div className={`${categorySidePanel} ${isVisibleCat ? showSidePanel : null}`}>
          <div className={headElement} onClick={() => dispatch(showCatSidePanel())}>
            <div className={content}>Powrót</div>
          </div>
          {fetchError ? <ShowError /> : categories.map(item => { return <NavComponent key={item.category} name={item.category} onClick={() => dispatch(showCatSidePanel())} /> })}
        </div>
      </Suspense>
    </>
  );
}

export default CategoryPanel;