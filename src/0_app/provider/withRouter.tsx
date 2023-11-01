import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from '@ui/index';

export const WithRouter = (component: React.ReactNode) => () => (
	<BrowserRouter>
		<Suspense fallback={<Loader />}>{component}</Suspense>
	</BrowserRouter>
);
