/* eslint-disable prettier/prettier */
import styles from './WordFormsCard.module.scss';

interface Props {
    type?: string;
}

const getRandomColor = () => {
    const colors = ['#FFFFFF', '#FFD4CC', '#E0F5FF', '#C1FBB4', '#D7E0FF', '#FFE89B', '#C2E8FF', '#FF8F87', '#97F48D'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

export default function WordFormsCard({ type = "определите форму слова" }: Props) {
    const randomColor = getRandomColor();

    const containerStyle: React.CSSProperties = {
        backgroundColor: randomColor,
    };

    return (
        <div className={styles.container} style={containerStyle}>
            {/* TODO заменить Learn и 'type' на данные с бэка */}
            <span className={styles.word}>Learn</span>
            <label className={styles.form}>{type}</label>
        </div>
    )
}
