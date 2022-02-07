import React from 'react';
import styles from './HeaderItem.module.scss';

const { itemWrapper } = styles;

interface HeaderItemProps {
  classes: string[];
  onClick?: () => void;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ classes = [], onClick, children }) => {
  return <div className={`${itemWrapper} ${classes}`} onClick={onClick}>
    {children}
  </div>;
}

export default HeaderItem;