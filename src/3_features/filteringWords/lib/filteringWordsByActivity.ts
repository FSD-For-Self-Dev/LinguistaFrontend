import { Word, Activity } from '@entities/words/model/types';

export const filteringWordsByActivity = (words: Array<Word>, activity: Activity) => {
	return words.filter((word) => word.activity === activity);
};
