import { useEffect } from 'react';
import cx from 'classnames';
import { wordsSelector, setFilter, getWords } from '@entities/words';
import { useAppSelector, useAppDispatch } from '@shared/model';
import iconNotActive from '@shared/assets/icons/icon_not_active.svg';
import iconActive from '@shared/assets/icons/icon_active.svg';
import iconCompleted from '@shared/assets/icons/icon_completed.svg';
import { WordsState } from '@entities/words/model/types';
import { filteringWordsByActivity } from '../../lib/filteringWordsByActivity';
import styles from './ActivityFilterWords.module.scss';

export const ActivityFilterWords = () => {
  const { filter, words } = useAppSelector<WordsState>(wordsSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWords());
    // eslint-disable-next-line
  }, []);

  const setActive = () => {
    if (filter === 'ACTIVE') {
      dispatch(setFilter({ filter: 'ALL', words }));
      return;
    }

    const filteringWords = filteringWordsByActivity(words, 'ACTIVE');
    dispatch(setFilter({ filter: 'ACTIVE', words: filteringWords }));
  };

  const setNotActive = () => {
    if (filter === 'INACTIVE') {
      dispatch(setFilter({ filter: 'ALL', words }));
      return;
    }

    const filteringWords = filteringWordsByActivity(words, 'INACTIVE');
    dispatch(setFilter({ filter: 'INACTIVE', words: filteringWords }));
  };

  const setCompleted = () => {
    if (filter === 'MASTERED') {
      dispatch(setFilter({ filter: 'ALL', words }));
      return;
    }

    const filteringWords = filteringWordsByActivity(words, 'MASTERED');
    dispatch(setFilter({ filter: 'MASTERED', words: filteringWords }));
  };

  return (
    <ul className={styles.filtersBlock}>
      <li
        className={cx(
          styles.filter,
          filter === 'INACTIVE' && styles.filter_active,
        )}
        onClick={setNotActive}
      >
        <img src={iconNotActive} alt='' />
        Неактивные
      </li>
      <li
        className={cx(
          styles.filter,
          filter === 'ACTIVE' && styles.filter_active,
        )}
        onClick={setActive}
      >
        <img src={iconActive} alt='' />
        Активные
      </li>
      <li
        className={cx(
          styles.filter,
          filter === 'MASTERED' && styles.filter_active,
        )}
        onClick={setCompleted}
      >
        <img src={iconCompleted} alt='' />
        Усвоенные
      </li>
    </ul>
  );
};
