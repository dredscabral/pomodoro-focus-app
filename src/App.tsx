import React, { useState, useEffect } from 'react';
import { useTimer } from './hooks/useTimer';
import { TimerDisplay } from './components/TimerDisplay';
import { ModeSelector } from './components/ModeSelector';
import { Controls } from './components/Controls';
import { Mode, DURATIONS } from './constants/durations';
import { MODE_COLORS } from './constants/colors';
import styles from './App.module.css';

const App: React.FC = () => {
  const [mode, setMode] = useState<Mode>('focus');
  const { timeRemaining, status, start, pause, reset } = useTimer(DURATIONS[mode]);

  const colors = MODE_COLORS[mode];
  const isRunning = status === 'running';

  // Update CSS variables for theming
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', colors.bg);
    root.style.setProperty('--accent-color', colors.accent);
    root.style.setProperty('--text-color', colors.text);
    root.style.setProperty('--accent-glow', `${colors.accent}40`);
  }, [colors]);

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
  };

  return (
    <div className={styles.app}>
      <div className={styles.backgroundOrbs}>
        <div className={styles.orb} />
        <div className={styles.orb} />
        <div className={styles.orb} />
      </div>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.logo}>🍅 Pomodoro</h1>
        </header>

        <ModeSelector
          currentMode={mode}
          onModeChange={handleModeChange}
          disabled={isRunning}
        />

        <TimerDisplay
          timeRemaining={timeRemaining}
          mode={mode}
          isRunning={isRunning}
        />

        <Controls
          status={status}
          onStart={start}
          onPause={pause}
          onReset={reset}
        />
      </main>

      <footer className={styles.footer}>
        <p>Stay focused. Take breaks. Repeat.</p>
      </footer>
    </div>
  );
};

export default App;
