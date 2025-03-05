import { JSX } from 'react';
import styles from './match-status.module.css';
import { MatchStatus as IMatchStatus, StatusValue } from '@/types/types';
import { MatchStatusProps } from '@/components/match-list/match/team-label/match-status/types';

export const MatchStatus = ({ score, status }: MatchStatusProps): JSX.Element => {
  const statusMapping: Record<IMatchStatus, StatusValue> = {
    Ongoing: {
      text: 'Live',
      style: styles.live,
    },
    Finished: {
      text: 'Finished',
      style: styles.finished,
    },
    Scheduled: {
      text: 'Match preparing',
      style: styles.prepared,
    },
  };

  return (
    <div className={styles.statusContainer}>
      <span className={styles.score}>{score}</span>
      <div className={`${styles.status} ${statusMapping[status].style}`}>
        {statusMapping[status].text}
      </div>
    </div>
  );
};
