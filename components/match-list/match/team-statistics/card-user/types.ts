import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Player } from '@/types/types';

export interface CardUserProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  player: Player;
}
