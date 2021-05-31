import Slider from '../slider/Slider';
import Banner from '../banner/Banner';

import styles from './StartPage.module.scss';

const { } = styles;

export interface StartPageProps {

}

const StartPage: React.FC<StartPageProps> = () => {
  return (
    <>
      <Slider />
      <Banner />
    </>
  );
}

export default StartPage;