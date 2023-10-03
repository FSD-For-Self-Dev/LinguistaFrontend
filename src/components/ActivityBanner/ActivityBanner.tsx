import { useLocation } from 'react-router-dom';
import { Button } from '@ui/Button';
import {
	VOCAB_ACTIVE_ROUTE,
	VOCAB_INACTIVE_ROUTE,
	VOCAB_LEARNED_ROUTE,
} from '@/router/routes';
import styles from './ActivityBanner.module.scss';
import IconDumbbell from '@assets/icons/icon_dumbbell.svg?react';
import { activityBanner } from '@/static/vocabulary';

const words = 146;

export const ActivityBanner = () => {
	const location = useLocation();
	return (
		<div className={styles.banner}>
			{location.pathname === VOCAB_ACTIVE_ROUTE ? (
				<span className={styles.left}>
					{activityBanner.active.status.part1 +
						words +
						activityBanner.wordsAndPhrases +
						activityBanner.active.status.part2}
				</span>
			) : (
				''
			)}
			{location.pathname === VOCAB_INACTIVE_ROUTE ? (
				<span className={styles.left}>
					{activityBanner.inactive.status.part1 +
						words +
						activityBanner.inactive.status.part2 +
						activityBanner.wordsAndPhrases}
				</span>
			) : (
				''
			)}
			{location.pathname === VOCAB_LEARNED_ROUTE ? (
				<span className={styles.left}>
					{activityBanner.learned.status.part1 +
						words +
						activityBanner.wordsAndPhrases +
						activityBanner.learned.status.part2}
				</span>
			) : (
				''
			)}
			<div className={styles.splitter} />
			<span className={styles.right}>
				{location.pathname === VOCAB_ACTIVE_ROUTE
					? activityBanner.active.advice
					: location.pathname === VOCAB_INACTIVE_ROUTE
					? activityBanner.inactive.advice
					: location.pathname === VOCAB_LEARNED_ROUTE
					? activityBanner.learned.advice
					: ''}
			</span>
			<Button className={styles.button} size="tall">
				<IconDumbbell className={styles.icon} />
				{location.pathname === VOCAB_LEARNED_ROUTE
					? activityBanner.takeTest
					: activityBanner.training}
			</Button>
		</div>
	);
};
