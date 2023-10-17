import { Route, Routes } from 'react-router-dom';
import { MAIN_ROUTE, VOCAB_ROUTE } from '../5_shared/lib/routes';

import MainLayout from '../2_widgets/MainLayout/MainLayout';
import Vocabulary from './Vocabulary/Vocabulary';

export const Routing = () => {
	return (
		<>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path={MAIN_ROUTE} />
					<Route path={VOCAB_ROUTE} element={<Vocabulary />} />
				</Route>
			</Routes>
		</>
	);
};
