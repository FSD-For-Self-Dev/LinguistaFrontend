import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuButton,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from '@shared/ui/DropdownMenu';
import { DEFAULT_SORT_PARAMS, SORT_PANEL } from '@shared/lib/sortPanel';
import TSortItem, {
  ESortDirection,
  ESortDirectionSymbol,
} from '@shared/interfaces/sortPanel';
import SvgIconSort from '@assets/icons/icon_sort.svg?react';

import styles from './SortBtnWithMenu.module.scss';

const SortBtnWithMenu = () => {
  const [currentSort, setCurrentSort] = useState(DEFAULT_SORT_PARAMS);

  const sortItems = SORT_PANEL.map((sortItem: TSortItem) => {
    const { label, field, options } = sortItem;

    const arrowSymbol =
      currentSort.sortBy === field ? ESortDirectionSymbol[currentSort.dir] : '';

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
    if (currentSort.sortBy === value)
      return setCurrentSort({
        ...currentSort,
        dir:
          currentSort.dir === ESortDirection.ASC
            ? ESortDirection.DESC
            : ESortDirection.ASC,
      });

    return setCurrentSort({ ...currentSort, sortBy: value });
  };

  return (
    <DropdownMenu>
      <DropdownMenuButton>
        <SvgIconSort />
      </DropdownMenuButton>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={currentSort.sortBy}
          onValueChange={valueChangeHandler}
        >
          {sortItems}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortBtnWithMenu;
