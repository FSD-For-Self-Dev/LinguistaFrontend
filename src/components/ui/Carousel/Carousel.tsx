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
	autoplay?: boolean;
	fade?: boolean;
	arrows?: boolean;
	dots?: boolean;
	slides?: number;
	className?: string;
	sliderClass?: string;
	buttonClass?: string;
	dotsClass?: string;
}

export const Carousel: FC<CarouselProps> = ({
	children,
	autoplay,
	fade = false,
	arrows,
	dots,
	slides = 1,
	className,
	sliderClass,
	buttonClass,
	dotsClass,
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
		cssEase: 'linear',
		arrows: false,
		fade: fade,
		autoplay: autoplay,
		autoplaySpeed: 8000,
		speed: 600,
		slidesToScroll: 1,
		slidesToShow: slides,
	};

	const settingsWithDots = {
		...settings,
		dots: true,
		dotsClass: cx('slick-dots', styles.dots, dotsClass),
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
