import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MatchStatus } from '@/types/types';

export interface MatchStatusProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  score: string;
  status: MatchStatus;
}
