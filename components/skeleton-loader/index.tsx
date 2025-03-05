import styles from './skeleton-loader.module.css';
import { JSX } from 'react';

export const SkeletonLoader = ({ count = 3 }: { count?: number }): JSX.Element => {
  return (
    <div className={styles.skeletonContainer}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={styles.skeletonCard}>
          <div className={styles.skeletonTitle}></div>
          <div className={styles.skeletonText}></div>
        </div>
      ))}
    </div>
  );
};
