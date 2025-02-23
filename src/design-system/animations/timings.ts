/**
 * Animation Timing Functions
 */

export const timings = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

export type TimingFunction = keyof typeof timings;

export const durations = {
  fastest: '100ms',
  faster: '150ms',
  fast: '200ms',
  normal: '300ms',
  slow: '400ms',
  slower: '500ms',
  slowest: '700ms',
} as const;

export type Duration = keyof typeof durations;

export const getTiming = (timing: TimingFunction): string => {
  return timings[timing];
};

export const getDuration = (duration: Duration): string => {
  return durations[duration];
};
