import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import LayoutWhithNavbar from '@/layouts/LayoutWhithNavbar';
import {
	ABOUT_ROUTE,
	COLLECT_ROUTE,
	EXERCISES_ROUTE,
	FAVOR_ROUTE,
	LANGS_ROUTE,
	MAIN_ROUTE,
	VOCAB_ACTIVE_ROUTE,
	VOCAB_DANGER_ROUTE,
	VOCAB_INACTIVE_ROUTE,
	VOCAB_LEARNED_ROUTE,
	VOCAB_POTENTIAL_ROUTE,
	VOCAB_ROUTE,
	VOCAB_WORD_ROUTE,
} from '@/router/routes';

const Vocabulary = lazy(() => import('@pages/Vocabulary'));
const DangerZone = lazy(() => import('@/components/DangerZone'));
const DangerZoneCards = lazy(() => import('@/components/DangerZone/DangerZoneCards'));
const WordInfo = lazy(() => import('@/components/WordInfo'));

export function Router() {
	return (
		<Routes>
			<Route element={<LayoutWhithNavbar />}>
				<Route path={MAIN_ROUTE} />
				<Route path={LANGS_ROUTE} />
				<Route path={VOCAB_ROUTE} element={<Vocabulary />}>
					<Route path={VOCAB_ACTIVE_ROUTE} element={<DangerZone />} />
					<Route path={VOCAB_INACTIVE_ROUTE} />
					<Route path={VOCAB_LEARNED_ROUTE} />
				</Route>
				<Route path={VOCAB_DANGER_ROUTE} element={<DangerZoneCards />} />
				<Route path={VOCAB_POTENTIAL_ROUTE} />
				<Route path={VOCAB_LEARNED_ROUTE} />
				<Route path={VOCAB_WORD_ROUTE} element={<WordInfo />} />
				<Route path={COLLECT_ROUTE} />
				<Route path={FAVOR_ROUTE} />
				<Route path={EXERCISES_ROUTE} />
				<Route path={ABOUT_ROUTE} />
			</Route>
		</Routes>
	);
}
