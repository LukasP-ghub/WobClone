import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';
import { showCatSidePanel, selectIsVisibleCatSP, selectCategories } from './navigationSlice';

import NavComponent from './NavComponent';
import styles from './CategorySidePanel.module.scss'

function CategoryPanel() {
  const isVisibleCat = useAppSelector(selectIsVisibleCatSP);
  const categories = useAppSelector(selectCategories)
  const dispatch = useAppDispatch();

  return (
    <div className={`${styles.categorySidePanel} ${isVisibleCat ? styles.showSidePanel : null}`}>
      <div className={styles.headElement} onClick={() => dispatch(showCatSidePanel())}>
        <div className={styles.content}>Powrót</div>
      </div>
      {categories.map(item => { return <NavComponent key={item.category} name={item.category} onClick={() => dispatch(showCatSidePanel())} /> })}
    </div>

  );
}

export default CategoryPanel;