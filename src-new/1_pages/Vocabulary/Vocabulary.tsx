import { ActivityFilterWords } from '../../3_features/filteringWords';
import { WordsList } from '../../3_features/renderWords';

const Vocabulary = () => {
	return (
		<div>
			<ActivityFilterWords />
			<WordsList />
		</div>
	);
};

export default Vocabulary;
