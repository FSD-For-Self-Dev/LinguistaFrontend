import classNames from 'classnames/bind';

import styles from './WordInfoCard.module.scss';

const cx = classNames.bind(styles);

export default function WordInfoCard({ type = 'default' }) {
	const constructControlDots = () => {
		const controlDots = new Array(5).fill(<></>).map((_ratingElement, i) => {
			return (
				<button className={cx('dotButton')} key={i}>
					<span className={cx('dotIcon', { active: i === 1 })} />
				</button>
			);
		});
		return controlDots;
	};

	return (
		<article className={cx('cardWord', { cardWordPadding: type === 'translations' })}>
			{type === 'default' && (
				<div className={cx('wrapper')}>
					<div className={cx('wordStatus')}>
						<span className={cx('fireIcon')}></span>
						<p className={cx('wordStatusText')}>Активное</p>
						<button className={cx('buttonQuestion')}>
							<span className={cx('questionIcon')}></span>
						</button>
					</div>

					<div className={cx('control')}>
						<ul className={cx('controlList')}>
							<li className={cx('controlItem')}>
								<button className={cx('buttonControl')}>
									<span className={cx('commentIcon')}></span>
								</button>
							</li>
							<li className={cx('controlItem')}>
								<button className={cx('buttonControl')}>
									<span className={cx('collectionIcon')}></span>
								</button>
							</li>
							<li className={cx('controlItem')}>
								<button className={cx('buttonControl')}>
									<span className={cx('arrowIcon')}></span>
								</button>
							</li>
							<li className={cx('controlItem')}>
								<button className={cx('buttonControl')}>
									<span className={cx('menuDotsIcon')}></span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			)}

			{type === 'translations' && (
				<button className={cx('buttonTranslate')}>
					<p className={cx('buttonTranslateText', 'marginRight')}>Все переводы</p>
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

			{type === 'translations' && (
				<div className={cx('controlDotsList')}>{constructControlDots()}</div>
			)}
		</article>
	);
}
