import { ActivityFilterWords } from '@features/filteringWords';
import { wordsSelector } from '@entities/words';
import { useAppSelector } from '@shared/model';
import { ActivityBanner } from './ui/ActivityBanner/ActivityBanner';

import styles from './ActivityFilterLayout.module.scss';

export const ActivityFilterLayout = () => {
  const { filteringWords, filter } = useAppSelector(wordsSelector);

  return (
    <div className={styles.container}>
      <ActivityFilterWords />

      {filter === 'INACTIVE' && (
        <ActivityBanner
          status={`В вашем словаре ${filteringWords.length} неактивных слов и\n фраз`}
          advice='Переведите их в статус активных, пройдя несколько упражнений с ними'
          textButton='Тренировать'
        />
      )}

      {filter === 'MASTERED' && (
        <ActivityBanner
          status={`Вы уже усвоили ${filteringWords.length} слов и фраз.\n Это прогресс!`}
          advice='Докажите, что это не все, на что вы способны! Добавьте слова в усвоенные, пройдя тест'
          textButton='Пройти тест'
        />
      )}

      {filter === 'ACTIVE' && (
        <ActivityBanner
          status={`Вы активно используете ${filteringWords.length} слов и фраз.\n Так держать!`}
          advice='Чтобы поддерживать эти слова активными, тренируйте их в упражнениях'
          textButton='Пройти тест'
        />
      )}
    </div>
  );
};
