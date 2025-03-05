import { JSX } from 'react';
import styles from './card-user.module.css';
import AvatarIcon from '@/assets/svg/avatar_global.svg';
import { CardUserProps } from '@/components/match-list/match/team-statistics/card-user/types';

export const CardUser = ({ player }: CardUserProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.nickname}>
        <AvatarIcon />
        <span className={styles.nicknameText}>{player.username}</span>
      </div>
      <div className={styles.statistics}>
        <span className={styles.textLabel}>Убийств:</span>
        <span className={styles.textValue}>{player.kills}</span>
      </div>
    </div>
  );
};
