import { JSX } from 'react';
import styles from './header.module.css';
import { ActionBar } from './action-bar';

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Match Tracker</h1>

      <ActionBar />
    </header>
  );
};
