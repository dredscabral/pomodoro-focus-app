# Pomodoro Focus Web App – React + TypeScript Architecture

## Suggested File Structure

```
src/
  components/
    App.tsx               // Root layout and mode/theme handling
    TimerDisplay.tsx      // Displays the time (MM:SS)
    TimerControls.tsx     // Start, Pause, Reset, Mode Switch buttons
    ModeSelector.tsx      // Allows manual switching between modes
  hooks/
    useTimer.ts           // Reusable logic for countdown timer
  constants/
    durations.ts          // Default durations and mode definitions
    colors.ts             // Mode-specific color themes
  styles/
    App.module.css        // Core layout and mode color styles
    ...                   // Additional CSS Modules as needed
  index.tsx               // Entry point
```

## File Responsibilities

- `components/App.tsx`  
  *Handles main app state: current mode, interacts with timer hook, manages visual theme, and arranges page layout. Passes props to child components.*

- `components/TimerDisplay.tsx`  
  *Display-only component showing the current timer value (formatted as MM:SS) and highlights current mode.*

- `components/TimerControls.tsx`  
  *Renders Start, Pause, and Reset buttons. Receives handler functions as props. Also provides accessible labeling.*

- `components/ModeSelector.tsx`  
  *Shows mode options (Focus, Short Rest, Long Rest). Calls parent handler on mode switch. Visually indicates selected mode.*

- `hooks/useTimer.ts`  
  *Reusable React hook encapsulating timer countdown logic, with actions for start, pause, reset, and supporting arbitrary durations.*

- `constants/durations.ts`  
  *Exports duration values in seconds and maps them by mode (e.g., Focus: 1500). No user customization logic.*

- `constants/colors.ts`  
  *Maps each mode to its background color, used for dynamic theming in the UI for clarity and accessibility.*

- `styles/App.module.css`  
  *Defines page centering, color classes for modes, and text sizing for the timer display.*

- `index.tsx`  
  *ReactDOM entry point — wires up the root component.*

---

### Notes

- **Component count is minimal** to support UI separation and logic reusability.
- **All timer logic** is handled by a single hook to ensure maintainability and reuse.
- **UI components** are stateless where possible, receiving all state and handlers via props, supporting a clear logic/UI boundary.
- **Constants** provide a single place for durations and colors, used app-wide.
- **CSS Modules** ensure scoped, maintainable styling and mode-dependent visuals.
- **No unnecessary abstraction or over-engineering**, allowing for extensibility while keeping the structure simple and maintainable.
