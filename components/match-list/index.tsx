'use client';

import { JSX } from 'react';
import styles from './match-list.module.css';
import { useMatchContext } from '@/components/providers/match-provider';
import { Match } from './match';
import { SkeletonLoader } from '@/components/skeleton-loader';

export const MatchList = (): JSX.Element => {
  const { matches, isLoading } = useMatchContext();

  if (isLoading) {
    return <SkeletonLoader count={5} />;
  }

  if (!matches || matches.length === 0) {
    return <p className={styles.empty}>Нет матчей</p>;
  }

  return (
    <div className={styles.list}>
      {matches.map((match, index) => (
        <Match match={match} key={index} />
      ))}
    </div>
  );
};
