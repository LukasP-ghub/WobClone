import { lazy, Suspense } from 'react';
import styles from './StartPage.module.scss';

const { } = styles;

const Slider = lazy(() => import('../slider/Slider'));

export interface StartPageProps {

}

const StartPage: React.FC<StartPageProps> = () => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Slider />
      </Suspense>
    </>
  );
}

export default StartPage;