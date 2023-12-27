import { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from '@ui/index';

export default function WithRouter(component: ReactNode) {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>{component}</Suspense>
    </BrowserRouter>
  );
}
