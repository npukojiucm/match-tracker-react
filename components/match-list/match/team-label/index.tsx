import { JSX } from 'react';
import CommandIcon from '@/assets/svg/illustrations_role.svg';
import { TeamLabelProps } from '@/components/match-list/match/team-label/types';
import styles from './team-label.module.css';

export const TeamLabel = ({ label, team, ...props }: TeamLabelProps): JSX.Element => {
  return (
    <div className={styles.labelContainer} {...props}>
      {team === 'home' && <CommandIcon className={styles.svgIcon} />}
      <span>{label}</span>
      {team === 'away' && <CommandIcon className={styles.svgIcon} />}
    </div>
  );
};
