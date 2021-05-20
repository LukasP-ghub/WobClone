import styles from './SliderItem.module.scss'

const { sliderItem } = styles;

const SliderItem: React.FC<{ content: string }> = ({ content }) => {
  return (
    <li className={sliderItem}>
      {content}
    </li>
  );
}

export default SliderItem;