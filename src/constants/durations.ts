export type Mode = 'focus' | 'shortBreak' | 'longBreak';

export const DURATIONS: Record<Mode, number> = {
  focus: 25 * 60,      // 25 minutes
  shortBreak: 5 * 60,  // 5 minutes
  longBreak: 15 * 60,  // 15 minutes
};

export const MODE_LABELS: Record<Mode, string> = {
  focus: 'Focus',
  shortBreak: 'Short Break',
  longBreak: 'Long Break',
};
