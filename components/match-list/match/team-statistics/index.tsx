import { JSX } from 'react';
import styles from './team-statistics.module.css';
import { TeamStatisticsProps } from '@/components/match-list/match/team-statistics/types';
import { CardUser } from '@/components/match-list/match/team-statistics/card-user';
import { Statistic } from '@/components/match-list/match/team-statistics/statistic';

export const TeamStatistics = ({ team }: TeamStatisticsProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.userCards}>
        {team.players.map((player, idx) => (
          <CardUser key={`${player} ${idx}`} player={player} />
        ))}
      </div>
      <div className={styles.statisticRow}>
        <Statistic label={'points'} value={team.points} />
        <div className={styles.divider}></div>
        <Statistic label={'place'} value={team.place} />
        <div className={styles.divider}></div>
        <Statistic label={'total_kills'} value={team.total_kills} />
      </div>
    </div>
  );
};
