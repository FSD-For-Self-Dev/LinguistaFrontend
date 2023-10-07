/* eslint-disable prettier/prettier */
import Tag from '@/components/WordInfo/Tag';
import styles from './CardCollection.module.scss';

const CardCollection = () => {
    const items = ['Dunder method', 'Linter', 'Framework'];

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3>Базовые</h3>
                <Tag>49</Tag>
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
