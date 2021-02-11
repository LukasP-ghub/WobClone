import React from 'react';
import styles from './NavComponent.module.scss'

function NavComponent(props) {

  return (

    <div
      className={`${styles.navComponent} ${props.extended ? styles.arrow : null}`}
      onClick={props.showCategories}
    >
      <div className={styles.content}>{props.name}</div>
    </div>

  );
}

export default NavComponent;