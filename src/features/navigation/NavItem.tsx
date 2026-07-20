import { Link } from 'react-router-dom';
import ChevronRight from '../../assets/svg/ChevronRight';
import { MQBreakpoints } from '../../constants/constants';
import useWidth from '../../hooks/useWidth';
import styles from './NavItem.module.scss';

const { arrow, content, navComponent, opposite } = styles;

type navItemType = {
  urlTag: string,
  tag?: string,
  extend?: boolean,
  onClick: () => void,
  onClickDesktop?: () => void,
}

export const NavItem: React.FC<navItemType> = ({ urlTag, tag = urlTag, extend, onClick, onClickDesktop }) => {
  const { currWidth } = useWidth();
  const callback = currWidth < MQBreakpoints.DESKTOP ? onClick : onClickDesktop;

  return (
    <>
      {
        extend ?
          <div
            className={`${navComponent} ${opposite}`}
            onClick={callback}
          >
            <div className={content}>{urlTag}</div>
            <span className={arrow}><ChevronRight /></span>
          </div>
          :
          <Link
          to={`/catalog/${urlTag}`} 
          state={{ tag }} 
            className={navComponent}
            onClick={callback}
          >
            <div className={content}>{urlTag}</div>
          </Link>
      }
    </>
  );
};

