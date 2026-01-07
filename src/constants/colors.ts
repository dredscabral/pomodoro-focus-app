import { Mode } from './durations';

export const MODE_COLORS: Record<Mode, { bg: string; accent: string; text: string }> = {
  focus: {
    bg: '#1a1a2e',
    accent: '#e94560',
    text: '#eaeaea',
  },
  shortBreak: {
    bg: '#0f3d3e',
    accent: '#00fff5',
    text: '#e8f3f1',
  },
  longBreak: {
    bg: '#1f1147',
    accent: '#9d4edd',
    text: '#f0e6ff',
  },
};
