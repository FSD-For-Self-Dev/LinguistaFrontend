/* eslint-disable prettier/prettier */
import { useState } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from './CustomDropdownMenu.module.scss';


interface Props {
    items: string[];
    side: "top" | "right" | "bottom" | "left";
    sideOffset: number;
    children: React.ReactNode;
    // onClick?: () => void;
}

export const CustomDropdownMenu = ({ items, side, sideOffset, children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
            <div onClick={() => console.log("click one")}>{children}</div>
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
