import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuButton,
} from '@shared/ui/DropdownMenu';
import { ADD_BTN_SUBMENU } from '@shared/lib/addBtnSubMenu';

import styles from './AddBtnWithMenu.module.scss';

const AddBtnWithMenu = () => {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);

  const onSelectHandler = (link: string, text: string) => {
    queryParams.set('title', text);
    navigate({ pathname: link, search: queryParams.toString() });
  };

  return (
    <DropdownMenu>
      <DropdownMenuButton className={styles.btn}>
        +&nbsp;&nbsp;Добавить
      </DropdownMenuButton>
      <DropdownMenuContent>
        {ADD_BTN_SUBMENU.map(({ id, text, link }) => (
          <DropdownMenuItem action={() => onSelectHandler(link, text)} key={id}>
            {text}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddBtnWithMenu;
