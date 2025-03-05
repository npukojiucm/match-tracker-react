'use client';

import { JSX } from 'react';
import ErrorIcon from '@/assets/svg/alert-triangle.svg';
import { Button } from '@/components/ui/button';
import RefreshIcon from '@/assets/svg/refresh.svg';
import { useMatchContext } from '@/components/providers/match-provider';
import styles from './action-bar.module.css';

export const ActionBar = (): JSX.Element => {
  const { loadMatches, isLoading, error } = useMatchContext();

  return (
    <div className={styles.actionBar}>
      {error && (
        <div className={styles.errorContainer}>
          <ErrorIcon className={styles.errorIcon} />
          <span>{error}</span>
        </div>
      )}
      <Button label={'Обновить'} onClick={loadMatches} disabled={isLoading}>
        <RefreshIcon className={`${styles.refreshIcon} ${isLoading ? styles.rotate : ''}`} />
      </Button>
    </div>
  );
};
