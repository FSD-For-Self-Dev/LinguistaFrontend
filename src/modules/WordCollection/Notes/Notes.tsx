import styles from './Notes.module.scss';
import SvgIconNotes from '@assets/icons/icon_notes.svg?react';
import CustomLink from '@/components/ui/CustomLink';
import NoteCollection from '../NoteCollection';
import { SectionTitle } from '@/components/ui/SectionTitle';

const Notes = () => {
	return (
		<div className={styles.notes}>
			<div className={styles.header}>
				<SectionTitle theme="bold" className={styles.title}>
					<SvgIconNotes />
					Заметки
				</SectionTitle>
				<CustomLink href="#" target="_blank" apperance="button">
					Все заметки&nbsp;
					<span className={styles.count}>15</span>
				</CustomLink>
			</div>
			<NoteCollection />
		</div>
	);
};

export default Notes;
