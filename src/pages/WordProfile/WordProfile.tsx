import Associations from '@/modules/Associations/Associations';
import WordCollection from '@/modules/WordCollection';
import WordInfo from '@components/WordInfo';

export default function WordProfile() {
	return (
		<>
			<WordInfo />
			<WordCollection />
			<Associations />
		</>
	);
}
