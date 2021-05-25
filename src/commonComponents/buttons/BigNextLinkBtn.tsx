import { Link, useHistory } from 'react-router-dom';
import styles from './BigLinkBtn.module.scss';

const { centerH, centerV, centerVH, btn, nextBtn } = styles;

export interface BigNextLinkBtnProps {
  linkPath: string,
}

const BigNextLinkBtn: React.FC<BigNextLinkBtnProps> = ({ linkPath, children }) => {
  return <Link to={linkPath} className={`${btn} ${nextBtn}`}>{children}</Link>;
}

export default BigNextLinkBtn;