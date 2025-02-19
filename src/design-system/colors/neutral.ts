/**
 * Neutral Color Palette
 * Grayscale colors for text, backgrounds, and borders
 */

export const neutral = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#d4d4d4',
  400: '#a3a3a3',
  500: '#737373',  // Base neutral
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
  950: '#0a0a0a',
} as const;

export type NeutralColor = keyof typeof neutral;

export const getNeutralColor = (shade: NeutralColor): string => {
  return neutral[shade];
};

// Common use cases
export const text = {
  primary: neutral[900],
  secondary: neutral[600],
  tertiary: neutral[500],
  disabled: neutral[400],
  inverse: neutral[50],
};

export const background = {
  primary: neutral[50],
  secondary: neutral[100],
  tertiary: neutral[200],
  inverse: neutral[900],
};

export const border = {
  light: neutral[200],
  default: neutral[300],
  dark: neutral[400],
};
