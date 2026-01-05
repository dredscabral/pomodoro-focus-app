import React from 'react';
import { Mode, MODE_LABELS } from '../constants/durations';
import styles from './TimerDisplay.module.css';

interface TimerDisplayProps {
  timeRemaining: number;
  mode: Mode;
  isRunning: boolean;
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({
  timeRemaining,
  mode,
  isRunning,
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.modeLabel}>{MODE_LABELS[mode]}</span>
      <div className={`${styles.time} ${isRunning ? styles.pulse : ''}`}>
        {formatTime(timeRemaining)}
      </div>
      <div className={styles.progressRing}>
        <svg viewBox="0 0 100 100" className={styles.ring}>
          <circle
            cx="50"
            cy="50"
            r="45"
            className={styles.ringBackground}
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            className={styles.ringProgress}
            style={{
              strokeDasharray: `${2 * Math.PI * 45}`,
              strokeDashoffset: `${2 * Math.PI * 45 * (1 - timeRemaining / (25 * 60))}`,
            }}
          />
        </svg>
      </div>
    </div>
  );
};
