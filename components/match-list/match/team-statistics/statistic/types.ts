import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StatisticLabelType } from '@/types/types';

export interface StatisticsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label: StatisticLabelType;
  value: number;
}
