/* eslint-disable prettier/prettier */
import { useState } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from './CustomDropdownMenu.module.scss';
import { ButtonIcon } from '@ui/ButtonIcon';

type ColorTheme = 'light' | 'dark';

interface Props {
    colorTheme: ColorTheme;
    items: string[];
    side: "top" | "right" | "bottom" | "left";
    sideOffset: number;
    icon: React.ReactNode;

}

export const CustomDropdownMenu = ({ colorTheme, items, side, sideOffset, icon }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
            <ButtonIcon colorTheme={colorTheme} trigger>
                {icon}
            </ButtonIcon>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className={styles.DropdownMenuContent}
                    side={side}
                    sideOffset={sideOffset}
                    onPointerLeave={closeMenu}
                >
                    {items.map((item, index) => (
                        <DropdownMenu.Item
                            key={index}
                            className={`${styles.DropdownMenuItem} ${styles.item}`}
                        >
                            {item}
                        </DropdownMenu.Item>
                    ))}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};
