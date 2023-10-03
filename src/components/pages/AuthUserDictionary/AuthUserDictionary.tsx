import { Route, Routes } from 'react-router-dom';

import LayoutWhithNavbar from '@components/layouts/LayoutWhithNavbar';
import {
	ABOUT_ROUTE,
	COLLECT_ROUTE,
	EXERCISES_ROUTE,
	FAVOR_ROUTE,
	LANGS_ROUTE,
	VOCAB_ACTIVE_ROUTE,
	VOCAB_DANGER_ROUTE,
	VOCAB_INACTIVE_ROUTE,
	VOCAB_LEARNED_ROUTE,
	VOCAB_POTENTIAL_ROUTE,
	VOCAB_ROUTE,
	VOCAB_WORD_ROUTE,
} from '@/utils/constants';
import { Vocabulary } from '../Vocabulary';
import WordInfo from '@/components/WordInfo';
import DangerZoneCards from '@/components/DangerZone/DangerZoneCards';
import styles from './AuthUserDictionary.module.scss';
import DangerZone from '@/components/DangerZone';

function AuthUserDictionary() {
	return (
		<LayoutWhithNavbar>
			<main className={styles.inner}>
				<Routes>
					<Route path="/" />
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
				</Routes>
			</main>
		</LayoutWhithNavbar>
	);
}

export default AuthUserDictionary;
