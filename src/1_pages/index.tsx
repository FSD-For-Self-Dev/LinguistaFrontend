import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '@widgets/MainLayout/MainLayout';
import {
	ABOUT_ROUTE,
	COLLECT_ROUTE,
	EXERCISES_ROUTE,
	FAVOR_ROUTE,
	LANGS_ROUTE,
	MAIN_ROUTE,
	VOCAB_ROUTE,
	WORD_ROUTE,
} from '../5_shared/lib/routes';

const Vocabulary = lazy(() => import('@pages/Vocabulary'));
const Word = lazy(() => import('@pages/Word'));
const NotFoundPage = lazy(() => import('@/1_pages/NotFoundPage/NotFoundPage'));

export const Routing = () => {
	return (
		<>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path={MAIN_ROUTE} element={<>Main</>} />
					<Route path={VOCAB_ROUTE} element={<Vocabulary />} />
					<Route path={FAVOR_ROUTE} element={<>Favorite</>} />
					<Route path={COLLECT_ROUTE} element={<>Collection</>} />
					<Route path={LANGS_ROUTE} element={<>Languages</>} />
					<Route path={EXERCISES_ROUTE} element={<>Exercises</>} />
					<Route path={WORD_ROUTE} element={<Word />} />
					<Route path={ABOUT_ROUTE} element={<>About</>} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
};
