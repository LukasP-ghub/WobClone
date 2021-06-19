import { lazy, Suspense } from 'react';
import styles from './StartPage.module.scss';

const { } = styles;

const Slider = lazy(() => import('../slider/Slider'));
const Banner = lazy(() => import('../banner/Banner'));

export interface StartPageProps {

}

const StartPage: React.FC<StartPageProps> = () => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Slider />
        <Banner />
      </Suspense>
    </>
  );
}

export default StartPage;