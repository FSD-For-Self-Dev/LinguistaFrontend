import { Route, Routes } from 'react-router-dom';
import {
	ABOUT_ROUTE,
	COLLECT_ROUTE,
	EXERCISES_ROUTE,
	FAVOR_ROUTE,
	LANGS_ROUTE,
	MAIN_ROUTE,
	VOCAB_ROUTE,
} from '../5_shared/lib/routes';

import MainLayout from '../2_widgets/MainLayout/MainLayout';
import Vocabulary from './Vocabulary/Vocabulary';

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
					<Route path={ABOUT_ROUTE} element={<>About</>} />
				</Route>
			</Routes>
		</>
	);
};
