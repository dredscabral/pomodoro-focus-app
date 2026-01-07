import { useState, useEffect, useCallback, useRef } from 'react';

export type TimerStatus = 'idle' | 'running' | 'paused';

interface UseTimerReturn {
  timeRemaining: number;
  status: TimerStatus;
  start: () => void;
  pause: () => void;
  reset: () => void;
  setDuration: (seconds: number) => void;
}

export function useTimer(initialDuration: number): UseTimerReturn {
  const [timeRemaining, setTimeRemaining] = useState(initialDuration);
  const [status, setStatus] = useState<TimerStatus>('idle');
  const intervalRef = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    if (status === 'running') return;
    
    setStatus('running');
    intervalRef.current = window.setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearTimer();
          setStatus('idle');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [status, clearTimer]);

  const pause = useCallback(() => {
    if (status !== 'running') return;
    clearTimer();
    setStatus('paused');
  }, [status, clearTimer]);

  const reset = useCallback(() => {
    clearTimer();
    setTimeRemaining(initialDuration);
    setStatus('idle');
  }, [clearTimer, initialDuration]);

  const setDuration = useCallback((seconds: number) => {
    clearTimer();
    setTimeRemaining(seconds);
    setStatus('idle');
  }, [clearTimer]);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  // Update when initialDuration changes
  useEffect(() => {
    setTimeRemaining(initialDuration);
    setStatus('idle');
    clearTimer();
  }, [initialDuration, clearTimer]);

  return {
    timeRemaining,
    status,
    start,
    pause,
    reset,
    setDuration,
  };
}
