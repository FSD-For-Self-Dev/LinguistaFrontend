import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '@/components/Loader';
import LangAndStatusFilter from '@components/LangAndStatusFilter';

const WordsList = lazy(() => import('@components/WordsList'));

function Vocabulary() {
	return (
		<>
			<LangAndStatusFilter />
			<Outlet />
			<Suspense fallback={<Loader />}>
				<WordsList />
			</Suspense>
		</>
	);
}

export default Vocabulary;
