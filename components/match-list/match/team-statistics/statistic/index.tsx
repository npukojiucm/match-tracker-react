import { JSX } from 'react';
import styles from './statistic.module.css';
import { StatisticsProps } from '@/components/match-list/match/team-statistics/statistic/types';
import { StatisticLabelType } from '@/types/types';

export const Statistic = ({ label, value }: StatisticsProps): JSX.Element => {
  const statisticLabel: Record<StatisticLabelType, string> = {
    place: 'Место:',
    points: 'Points',
    total_kills: 'Всего убийств:',
  };

  return (
    <div className={styles.statistic}>
      <span className={styles.statisticLabel}>{statisticLabel[label]}</span>
      <span className={styles.statisticValue}>{value}</span>
    </div>
  );
};
