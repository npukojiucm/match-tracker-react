import { JSX } from 'react';
import styles from './button.module.css';
import { ButtonProps } from '@/components/ui/button/types';

export const Button = ({ label, children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      <span>{label}</span>
      {children}
    </button>
  );
};
