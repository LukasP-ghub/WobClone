import styles from './SliderPage.module.scss';

const { itemList } = styles;

interface SliderPageProps {
  slidePage: number;
  children: React.ReactNode;
}

const SliderPage: React.FC<SliderPageProps> = ({ slidePage, children }) => {
  return (
    <ul className={itemList} style={{ transform: `translateX(${slidePage * -100}%)` }}>
      {children}
    </ul>
  );
}

export default SliderPage;