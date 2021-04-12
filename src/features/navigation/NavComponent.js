import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavComponent.module.scss'

const { arrow, content, navComponent } = styles;

function NavComponent(props) {

  return (

    <Link
      to={'/catalog/' + props.name}
      className={`${navComponent} ${props.extended ? arrow : null}`}
      onClick={props.onClick}>

      <div className={content}>{props.name}</div>

    </Link>

  );
}

export default NavComponent;
