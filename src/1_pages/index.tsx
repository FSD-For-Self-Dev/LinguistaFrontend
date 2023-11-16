import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	ABOUT_ROUTE,
	ALL_DEFINITIONS,
	COLLECT_ROUTE,
	EXERCISES_ROUTE,
	FAVOR_ROUTE,
	LANGS_ROUTE,
	MAIN_ROUTE,
	VOCAB_ROUTE,
	WORD_ROUTE,
} from '@shared/lib/routes';
import MainLayout from '@widgets/MainLayout/MainLayout';

const Vocabulary = lazy(() => import('@pages/Vocabulary'));
const Word = lazy(() => import('@pages/Word'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage/NotFoundPage'));
const DefinitionsPage = lazy(() => import('@pages/Definitions'));

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
					<Route path={WORD_ROUTE + ALL_DEFINITIONS} element={<DefinitionsPage />} />
					<Route path={ABOUT_ROUTE} element={<>About</>} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
};
