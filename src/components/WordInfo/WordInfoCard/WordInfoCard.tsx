import cx from 'classnames';

import styles from './WordInfoCard.module.scss';

export default function WordInfoCard({ type = 'default' }) {
	return (
		<article
			className={cx(styles.cardWord, {
				cardWordPadding: type === styles.translations,
			})}
		>
			{type === 'default' && (
				<div className={cx(styles.wrapper)}>
					<div className={cx(styles.wordStatus)}>
						<span className={cx(styles.fireIcon)}></span>
						<p className={cx(styles.wordStatusText)}>Активное</p>
						<button className={cx(styles.buttonQuestion)}>
							<span className={cx(styles.questionIcon)}></span>
						</button>
					</div>

					<div className={cx(styles.control)}>
						<ul className={cx(styles.controlList)}>
							<li className={cx(styles.controlItem)}>
								<button className={cx(styles.buttonControl)}>
									<span className={cx(styles.commentIcon)}></span>
								</button>
							</li>
							<li className={cx(styles.controlItem)}>
								<button className={cx(styles.buttonControl)}>
									<span className={cx(styles.collectionIcon)}></span>
								</button>
							</li>
							<li className={cx(styles.controlItem)}>
								<button className={cx(styles.buttonControl)}>
									<span className={cx(styles.arrowIcon)}></span>
								</button>
							</li>
							<li className={cx(styles.controlItem)}>
								<button className={cx(styles.buttonControl)}>
									<span className={cx(styles.menuDotsIcon)}></span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			)}

			{type === 'translations' && (
				<button className={cx('buttonTranslate')}>
					<p className={cx('buttonTranslateText', 'marginRight')}>
						Все переводы
					</p>
					<p className={cx('buttonTranslateText', 'colorGray')}>4</p>
				</button>
			)}

			<div className={cx('wordWrapper')}>
				<div className={cx('lang')}>
					<span className={cx('languageIcon')}></span>
					<p className={cx('languageText')}>Английский</p>
				</div>
				<div className={cx('word', { marginBottom: type === 'translations' })}>
					{type === 'translations' && (
						<button className={cx('buttonControl', 'buttonControlMarginRight')}>
							<span className={cx('buttonArrowLeft')}></span>
						</button>
					)}
					<p className={cx('wordText')}>Jump in at the deep end</p>
					<button className={cx('buttonControl')}>
						<span className={cx('copyIcon')}></span>
					</button>
					{type === 'translations' && (
						<button className={cx('buttonControl', 'buttonControlMarginLeft')}>
							<span className={cx('buttonArrowRight')}></span>
						</button>
					)}
				</div>
			</div>
		</article>
	);
}
