import { Route, Routes } from 'react-router-dom';
import { MAIN_ROUTE, VOCAB_ROUTE } from '../shared/lib/routes';

import Vocabulary from './Vocabulary/Vocabulary';

export const Routing = () => {
	return (
		<Routes>
			<Route path={MAIN_ROUTE} />
			<Route path={VOCAB_ROUTE} element={<Vocabulary />} />
		</Routes>
	);
};
