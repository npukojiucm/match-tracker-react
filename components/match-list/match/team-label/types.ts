import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TeamLabelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label: string;
  team: 'home' | 'away';
}
