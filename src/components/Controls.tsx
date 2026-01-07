import React from 'react';
import { TimerStatus } from '../hooks/useTimer';
import styles from './Controls.module.css';

interface ControlsProps {
  status: TimerStatus;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export const Controls: React.FC<ControlsProps> = ({
  status,
  onStart,
  onPause,
  onReset,
}) => {
  const isRunning = status === 'running';
  const showReset = status !== 'idle';

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${styles.primary}`}
        onClick={isRunning ? onPause : onStart}
        aria-label={isRunning ? 'Pause timer' : 'Start timer'}
      >
        {isRunning ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path d="M8 5.14v13.72a1 1 0 001.5.87l11-6.86a1 1 0 000-1.74l-11-6.86a1 1 0 00-1.5.87z" />
          </svg>
        )}
        <span>{isRunning ? 'Pause' : 'Start'}</span>
      </button>

      <button
        className={`${styles.button} ${styles.secondary} ${showReset ? styles.visible : ''}`}
        onClick={onReset}
        aria-label="Reset timer"
        disabled={!showReset}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}>
          <path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
        <span>Reset</span>
      </button>
    </div>
  );
};
