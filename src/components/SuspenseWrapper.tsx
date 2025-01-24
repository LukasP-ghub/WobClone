import React, { Suspense } from 'react';
import LoadingSpinner from './loadingSpinner/LoadingSpinner';

type Props = {
  children: React.ReactNode;
};

const SuspenseWrapper: React.FC<Props> = ({ children }) => {
  return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>;
};

export default SuspenseWrapper;
