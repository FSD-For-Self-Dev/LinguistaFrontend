import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from '../../shared/ui';

export const WithRouter = (component: React.ReactNode) => () => (
	<BrowserRouter>
		<Suspense fallback={<Loader />}>{component}</Suspense>
	</BrowserRouter>
);
