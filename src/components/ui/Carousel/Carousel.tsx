import React from 'react';
import { FC } from 'react';
import { useRef } from 'react';
import cx from 'classnames';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SvgArrow from '@assets/icons/icon_arrow_up.svg?react';
import styles from './Carousel.module.scss';

interface CarouselProps {
	children: Iterable<React.ReactNode> | React.ReactElement;
	arrows?: boolean;
	dots?: boolean;
	slides?: number;
	className?: string;
	sliderClass?: string;
	buttonClass?: string;
}

export const Carousel: FC<CarouselProps> = ({
	children,
	arrows,
	dots,
	slides = 1,
	className,
	sliderClass,
	buttonClass,
}) => {
	const sliderRef = useRef<Slider | null>();
	const nextSlide = () => {
		sliderRef.current && sliderRef.current.slickNext();
	};
	const prevSlide = () => {
		sliderRef.current && sliderRef.current.slickPrev();
	};

	const settings = {
		className: `${styles.slider}`,
		infinite: true,
		lazyLoad: true,
		arrows: false,
		autoplay: false,
		speed: 700,
		slidesToScroll: 1,
		slidesToShow: slides,
	};

	const settingsWithDots = {
		...settings,
		dots: true,
		dotsClass: cx('slick-dots', styles.dots),
	};

	const carouselSettings = dots ? settingsWithDots : settings;

	return (
		<div className={cx(styles.carousel, className)}>
			{arrows && (
				<button
					onClick={() => prevSlide()}
					className={cx(styles.button, buttonClass)}
					style={
						React.Children.count(children) > slides ? {} : { display: 'none' }
					}
				>
					<SvgArrow className={styles.prev_arrow} />
				</button>
			)}
			<Slider
				ref={(slider) => (sliderRef.current = slider)}
				{...carouselSettings}
				className={cx(styles.slider, sliderClass)}
			>
				{children}
			</Slider>
			{arrows && (
				<button
					onClick={() => nextSlide()}
					className={cx(styles.button, buttonClass)}
					style={
						React.Children.count(children) > slides ? {} : { display: 'none' }
					}
				>
					<SvgArrow className={styles.next_arrow} />
				</button>
			)}
		</div>
	);
};
