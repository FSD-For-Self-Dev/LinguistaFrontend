import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuButton,
	DropdownMenuItem,
} from '@/components/ui/DropdownMenu';

import { SORT_PANEL } from '@/static/sortPanel';
import SvgIconSort from '@assets/icons/icon_sort.svg?react';
import styles from './SortPanel.module.scss';
import { TSortItem } from '@/shared/interfaces/sortPanel';

const SortPanel = () => {
	const selectHandler = () => {};

	const sortItems = SORT_PANEL.map((sortItem: TSortItem) => {
		const { label, field } = sortItem;
		return (
			<DropdownMenuItem action={selectHandler} key={field}>
				{label}
			</DropdownMenuItem>
		);
	});

	return (
		<DropdownMenu>
			<DropdownMenuButton className={styles.btn}>
				<SvgIconSort />
			</DropdownMenuButton>
			<DropdownMenuContent>{sortItems}</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default SortPanel;
