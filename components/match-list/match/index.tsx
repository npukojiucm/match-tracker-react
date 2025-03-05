'use client';
import styles from './match.module.css';
import { JSX, useState } from 'react';
import { TeamLabel } from '@/components/match-list/match/team-label';
import { CardProps } from '@/components/match-list/match/types';
import { TeamStatistics } from '@/components/match-list/match/team-statistics';
import { MatchStatus } from '@/components/match-list/match/team-label/match-status';

export const Match = ({ match }: CardProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleStatistics = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.match} onClick={toggleStatistics}>
      <div className={styles.content}>
        <TeamLabel label={match.homeTeam.name} team={'home'} />
        <MatchStatus score={match.homeScore + ' : ' + match.awayScore} status={match.status} />
        <TeamLabel label={match.awayTeam.name} team={'away'} />
      </div>

      <div className={`${styles.statistics} ${isOpen ? styles.show : ''}`}>
        <TeamStatistics team={match.homeTeam} />
        <TeamStatistics team={match.awayTeam} />
      </div>
    </div>
  );
};
