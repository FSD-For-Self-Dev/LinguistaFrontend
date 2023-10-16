import { useNavigate } from 'react-router-dom';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuButton,
} from '@/components/ui/DropdownMenu';
import { ADD_BTN_SUBMENU } from '@/static/addBtnSubMenu';

import styles from './AddBtnMenu.module.scss';

const AddBtnMenu = () => {
	const navigate = useNavigate();
	const queryParams = new URLSearchParams(location.search);

	const onSelectHandler = (link: string, text: string) => {
		queryParams.set('title', text);
		navigate({ pathname: link, search: queryParams.toString() });
	};

	return (
		<DropdownMenu>
			<DropdownMenuButton className={styles.btn}>+&nbsp;&nbsp;Добавить</DropdownMenuButton>
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

export default AddBtnMenu;
