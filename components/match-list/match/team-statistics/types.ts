import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Team } from '@/types/types';

export interface TeamStatisticsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  team: Team;
}
