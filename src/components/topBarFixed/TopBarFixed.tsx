import styles from './TopBarFixed.module.scss';

const { topBar } = styles;

export interface TopBarFixedProps {

}

const TopBarFixed: React.FC<TopBarFixedProps> = (props) => {
  return (
    <div className={topBar}>
      {props.children}
    </div>);
}

export default TopBarFixed;