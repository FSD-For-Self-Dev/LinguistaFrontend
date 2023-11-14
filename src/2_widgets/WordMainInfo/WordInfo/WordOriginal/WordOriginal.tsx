import {
	WordSubMenu,
	CardContainer,
	SectionTitle,
	CopyText,
	AddToFavorite,
	ButtonIcon,
} from '@ui/index';
import { IWord } from '../WordInfo';
import { WordStatus } from '@features/getWordStatus/ui';
import SvgLang from '@assets/icons/wordProfile/language.svg?react';
import SvgComment from '@assets/icons/wordProfile/comment.svg?react';
import SvgShare from '@assets/icons/wordProfile/arrow.svg?react';
import styles from './WordOriginal.module.scss';

interface Props {
	info: IWord;
}

export default function WordOriginal({ info }: Props) {
	return (
		<CardContainer className={styles.container}>
			<div className={styles.wrapper}>
				<WordStatus activity={info.status} colorTheme="dark" />

				<ul className={styles.buttons}>
					<li>
						<ButtonIcon>
							<SvgComment />
						</ButtonIcon>
					</li>
					<li>
						<AddToFavorite colorTheme="dark" isFavorite={info.favorite} id={''} />
					</li>
					<li>
						<ButtonIcon>
							<SvgShare />
						</ButtonIcon>
					</li>
					<li>
						<WordSubMenu colorTheme="dark" />
					</li>
				</ul>
			</div>
			<SectionTitle>
				<SvgLang />
				Английский
			</SectionTitle>
			<div className={styles.word}>
				<p className={styles.wordText}>{info.word}</p>
				<CopyText text={info.word} />
			</div>
		</CardContainer>
	);
}
