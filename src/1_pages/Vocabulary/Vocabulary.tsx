import { useEffect } from 'react';
import { LanguageFilterLayout } from '@widgets/LanguageFilterLayout/LanguageFilterLayout';
import { ActivityFilterLayout } from '@widgets/ActivityFilterLayout/ActivityFilterLayout';
import { WordsLayout } from '@widgets/WordsLayout/WordsLayout';
import WordLayout from '@widgets/WordLayout/WordLayout';
import { wordsSelector, getWords, Word } from '@entities/words';
import { useAppSelector, useAppDispatch } from '@shared/model';
import { WordsState } from '@entities/words/model/types';
import styles from './Vocabulary.module.scss';

export default function Vocabulary() {
  const { filteringWords } = useAppSelector<WordsState>(wordsSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWords());
  }, [dispatch]);

  return (
    <div className={styles['vocabulary-container']}>
      <LanguageFilterLayout />
      <ActivityFilterLayout />
      <WordsLayout>
        {filteringWords.map((word: Word) => (
          <WordLayout key={word.id} item={word} />
        ))}
      </WordsLayout>
    </div>
  );
}
