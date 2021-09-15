import { lazy, Suspense } from 'react';
import styles from './StartPage.module.scss';

import LoadingSpinner from '../../commonComponents/loadingSpinner/LoadingSpinner';

const { } = styles;

const Slider = lazy(() => import('../slider/Slider'));

export interface StartPageProps {

}

const StartPage: React.FC<StartPageProps> = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Slider />
      </Suspense>
    </>
  );
}

export default StartPage;