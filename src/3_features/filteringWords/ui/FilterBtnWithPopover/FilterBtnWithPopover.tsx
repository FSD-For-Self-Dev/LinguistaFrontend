import { Popover, PopoverTrigger, PopoverContent } from '@shared/ui/Popover';
import SvgIconFilter from '@assets/icons/icon_filter.svg?react';

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
