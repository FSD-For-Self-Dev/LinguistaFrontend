import { Outlet } from 'react-router-dom';
import { WordsList } from '@components/WordsList';
import LangAndStatusFilter from '@components/LangAndStatusFilter';

//import styles from './Vocabulary.module.scss';

export function Vocabulary() {
	return (
		<>
			<LangAndStatusFilter />
			<Outlet />
			<WordsList />
		</>
	);
}
