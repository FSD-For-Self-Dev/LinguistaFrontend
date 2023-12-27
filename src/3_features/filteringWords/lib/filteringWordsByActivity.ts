import { Word, Activity } from '@entities/words';

export const filteringWordsByActivity = (words: Word[], activity: Activity) => {
  return words.filter((word) => word.activity === activity);
};
