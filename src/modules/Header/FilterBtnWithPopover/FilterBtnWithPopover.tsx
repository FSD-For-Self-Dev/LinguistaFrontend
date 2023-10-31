import SvgIconFilter from '@assets/icons/icon_filter.svg?react';
//import styles from './FilterBtnWithMenu.module.scss';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/Popover';

const FilterBtnWithPopover = () => {
	return (
		<Popover>
			<PopoverTrigger>
				<SvgIconFilter />
			</PopoverTrigger>
			<PopoverContent>
				<h3>Теги</h3>
				<span>Легкое</span> <span>Формальное</span>
				<h3>Тип или часть речи</h3>
				Дополнительно
			</PopoverContent>
		</Popover>
	);
};

export default FilterBtnWithPopover;
