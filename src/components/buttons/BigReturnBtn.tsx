import styles from './BigLinkBtn.module.scss';

const { btn, backBtn } = styles;

export interface BigReturnBtnProps {
  clickHandler: () => void
}

const BigReturnBtn: React.FC<BigReturnBtnProps> = ({ clickHandler, children }) => {
  return <button className={`${btn} ${backBtn}`} onClick={clickHandler}>{children}</button>;
}

export default BigReturnBtn;