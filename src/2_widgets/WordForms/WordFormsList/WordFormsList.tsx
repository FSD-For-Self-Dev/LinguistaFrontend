/* eslint-disable prettier/prettier */
import WordFormsCard from '../WordFormsCard';
import styles from './WordFormsList.module.scss';

export default function WordFormsList() {
    return (
        <div className={styles.list}>
            <WordFormsCard />
            <WordFormsCard type='past participle' />
            <WordFormsCard type='present perfect' />
            <WordFormsCard type='past perfect' />
        </div>
    );
}
