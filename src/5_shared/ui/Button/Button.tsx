import cx from 'classnames';
import styles from './Button.module.scss';
import { ReactNode } from 'react';

type ButtonTheme = 'primary' | 'transparent' | 'secondary' | 'no-border';
type ButtonSize = 'normal' | 'tall';

interface Props {
  children: ReactNode;
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  className,
  theme = 'primary',
  size = 'normal',
  type = 'button',
  disabled = false,
  active,
  onClick,
}: Props) => {
  return (
    <button
      className={cx(
        styles[`${theme}`],
        styles[`${size}`],
        active && styles[`${theme}_active`],
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
