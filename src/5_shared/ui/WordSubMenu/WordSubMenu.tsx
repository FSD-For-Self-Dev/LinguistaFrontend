import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuButton,
} from '@shared/ui/DropdownMenu';

import WORD_SUBMENU from '@shared/lib/wordSubMenu';
import SvgIconDots from '@assets/icons/icon_dots.svg?react';
import styles from './WordSubMenu.module.scss';

type ColorTheme = 'light' | 'dark';

interface Props {
  colorTheme: ColorTheme;
}

const WordSubMenu = ({ colorTheme }: Props) => {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);

  const selectHandler = (link: string, text: string) => {
    queryParams.set('title', text);

    navigate({ pathname: link, search: queryParams.toString() });
  };

  return (
    <DropdownMenu>
      <DropdownMenuButton className={styles[colorTheme]}>
        <SvgIconDots />
      </DropdownMenuButton>
      <DropdownMenuContent side='right' sideOffset={10} arrow={false}>
        {WORD_SUBMENU.map(({ item, link, classes, disabled }, idx) => (
          <DropdownMenuItem
            key={`wsm${idx}`}
            disabled={disabled}
            className={classes}
            action={link ? () => selectHandler(link, item) : undefined}
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WordSubMenu;
