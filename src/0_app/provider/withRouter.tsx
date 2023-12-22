import { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from '@ui/index';

export const WithRouter = (component: ReactNode) => () => (
	<BrowserRouter>
		<Suspense fallback={<Loader />}>{component}</Suspense>
	</BrowserRouter>
);
