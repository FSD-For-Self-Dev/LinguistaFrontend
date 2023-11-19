/* eslint-disable prettier/prettier */
import cx from 'classnames';
import { CardContainer } from '@ui/index';
import styles from './WordFormsCard.module.scss';

interface Props {
    type?: 'infinitive' | 'past participle' | 'present perfect' | 'past perfect';
}

export default function WordFormsCard({ type = 'infinitive' }: Props) {
    const cardClass = cx(
        styles.container,
        type === 'infinitive' && styles.infinitiveContainer,
        type === 'past participle' && styles.pastParticipleContainer,
        type === 'present perfect' && styles.presentPerfectContainer,
        type === 'past perfect' && styles.pastPerfectContainer
    );

    return (
        <CardContainer className={cardClass}>
            {/* TODO заменить Learn на данные с бэка */}
            <span className={styles.word}>Learn</span>
            <label className={styles.form}>{type}</label>
        </CardContainer>
    )
}
