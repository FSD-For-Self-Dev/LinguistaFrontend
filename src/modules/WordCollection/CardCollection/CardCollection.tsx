/* eslint-disable prettier/prettier */
import styles from './CardCollection.module.scss';
import { Button } from '@/components/ui/Button';

const CardCollection = () => {
    const items = ['Dunder method', 'Linter', 'Framework'];

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3>Базовые</h3>
                <Button className={styles.button}>49</Button>
            </div>
            <div className={styles.description}>
                {items.map((item, id) => (
                    <p key={id}>{item}</p>
                ))}
            </div>
        </div>
    );
};

export default CardCollection;
