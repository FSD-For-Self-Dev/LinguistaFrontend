import { CardContainer } from '@ui/CardContainer';
import { SectionTitle } from '@ui/SectionTitle';
import { CopyText } from '@ui/CopyText';
import { WordStatus, WordSubMenu } from '@ui/index';
import { AddToFavorite } from '@ui/AddToFavorite';
import { ButtonIcon } from '@ui/ButtonIcon';
import { IWordCard } from '@shared/interfaces/IWordCard';

import styles from './WordOriginal.module.scss';
import SvgLang from '@assets/icons/wordProfile/language.svg?react';
import SvgComment from '@assets/icons/wordProfile/comment.svg?react';
import SvgShare from '@assets/icons/wordProfile/arrow.svg?react';

interface Props {
	info: IWordCard;
}

export default function WordOriginal({ info }: Props) {
	return (
		<CardContainer className={styles.container}>
			<div className={styles.wrapper}>
				<WordStatus status={info.status} colorTheme="dark" />

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
