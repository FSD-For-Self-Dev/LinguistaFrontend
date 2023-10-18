import { Word, Activity } from '../../../4_entities/words';

export const filteringWordsByActivity = (words: Array<Word>, activity: Activity) => {
	return words.filter((word) => word.activity === activity);
};
