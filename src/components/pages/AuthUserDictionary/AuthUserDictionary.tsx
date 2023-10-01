import { Route, Routes } from 'react-router-dom';

import LayoutWhithNavbar from '@components/layouts/LayoutWhithNavbar';
import { WordsList } from '@components/WordsList';
import LangAndStatusFilter from '@components/LangAndStatusFilter';
import DangerZone from '@components/DangerZone';
import DangerZoneCards from '@components/DangerZone/DangerZoneCards';

import styles from './AuthUserDictionary.module.scss';
function AuthUserDictionary() {
	return (
		<LayoutWhithNavbar>
			<main className={styles.inner}>
				<LangAndStatusFilter />
				<Routes>
					<Route path="/" element={<DangerZone />} />
					<Route path="/dangerZoneCards" element={<DangerZoneCards />} />
				</Routes>
				<WordsList />
			</main>
		</LayoutWhithNavbar>
	);
}

export default AuthUserDictionary;
