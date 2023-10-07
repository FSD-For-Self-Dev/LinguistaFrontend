// import { WordsList } from '@/components/WordsList';
import WordCollection from '@/modules/WordCollection';

import WordInfo from '@components/WordInfo';
// import { Outlet } from 'react-router-dom';

export default function WordProfile() {
	return (
		<>
			<WordInfo />
			<WordCollection />
		</>
	);
}
