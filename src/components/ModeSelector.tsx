import React from 'react';
import { Mode, MODE_LABELS } from '../constants/durations';
import styles from './ModeSelector.module.css';

interface ModeSelectorProps {
  currentMode: Mode;
  onModeChange: (mode: Mode) => void;
  disabled?: boolean;
}

const modes: Mode[] = ['focus', 'shortBreak', 'longBreak'];

export const ModeSelector: React.FC<ModeSelectorProps> = ({
  currentMode,
  onModeChange,
  disabled = false,
}) => {
  return (
    <div className={styles.container} role="tablist" aria-label="Timer mode">
      {modes.map((mode) => (
        <button
          key={mode}
          role="tab"
          aria-selected={currentMode === mode}
          className={`${styles.modeButton} ${currentMode === mode ? styles.active : ''}`}
          onClick={() => onModeChange(mode)}
          disabled={disabled}
        >
          {MODE_LABELS[mode]}
        </button>
      ))}
      <div 
        className={styles.slider}
        style={{ '--index': modes.indexOf(currentMode) } as React.CSSProperties}
      />
    </div>
  );
};
