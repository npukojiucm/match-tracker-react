import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Match } from '@/types/types';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  match: Match;
}
