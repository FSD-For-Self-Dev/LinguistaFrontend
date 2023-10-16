import { useState } from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuButton,
	DropdownMenuRadioItem,
	DropdownMenuRadioGroup,
} from '@/components/ui/DropdownMenu';
import { ESortDirection, ESortDirectionSymbol, TSortItem } from '@/shared/interfaces/sortPanel';
import { DEFAULT_SORT_PARAMS, SORT_PANEL } from '@/static/sortPanel';
import SvgIconSort from '@assets/icons/icon_sort.svg?react';
import styles from './SortPanel.module.scss';

const SortPanel = () => {
	const [currentSort, setCurrentSort] = useState(DEFAULT_SORT_PARAMS);

	const sortItems = SORT_PANEL.map((sortItem: TSortItem) => {
		const { label, field, options } = sortItem;

		const arrowSymbol = currentSort.sortBy === field ? ESortDirectionSymbol[currentSort.dir] : '';

		const sortTitle = options[currentSort.dir] || `Сортировать ${label}`;

		return (
			<DropdownMenuRadioItem
				key={field}
				value={field}
				textValue={sortTitle}
				className={styles.radioItem}
			>
				<span className={styles.arrow}>{arrowSymbol}</span>
				{label}
			</DropdownMenuRadioItem>
		);
	});

	const valueChangeHandler = (value: string) => {
		console.log(value);
		if (currentSort.sortBy === value)
			return setCurrentSort({
				...currentSort,
				dir: currentSort.dir === ESortDirection.ASC ? ESortDirection.DESC : ESortDirection.ASC,
			});

		return setCurrentSort({ ...currentSort, sortBy: value });
	};

	return (
		<DropdownMenu>
			<DropdownMenuButton className={styles.btn}>
				<SvgIconSort />
			</DropdownMenuButton>
			<DropdownMenuContent>
				<DropdownMenuRadioGroup value={currentSort.sortBy} onValueChange={valueChangeHandler}>
					{sortItems}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default SortPanel;
