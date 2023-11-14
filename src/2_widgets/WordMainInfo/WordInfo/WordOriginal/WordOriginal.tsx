import cx from 'classnames';
import { IWord } from '../WordInfo';
import { WordStatus } from '@entities/word/ui';
import { AddToFavorite } from '@features/addToFavorite';
import { WordSubMenu, CardContainer, SectionTitle, CopyText, ButtonIcon } from '@ui/index';
import SvgLang from '@assets/icons/wordProfile/language.svg?react';
import SvgComment from '@assets/icons/wordProfile/comment.svg?react';
import SvgShare from '@assets/icons/wordProfile/arrow.svg?react';
import styles from './WordOriginal.module.scss';

interface Props {
	info: IWord;
	classname?: string;
}

export function WordOriginal({ info, classname }: Props) {
	return (
		<CardContainer className={cx(styles.container, classname)}>
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
