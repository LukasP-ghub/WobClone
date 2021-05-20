import styles from './SliderPage.module.scss'

const { itemList } = styles;

const SliderPage: React.FC<{ slidePage: number }> = ({ slidePage, children }) => {
  return (
    <ul className={itemList} style={{ transform: `translateX(${slidePage * -100}%)` }}>
      {children}
    </ul>
  );
}

export default SliderPage;