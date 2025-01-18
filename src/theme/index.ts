/**
 * Theme Configuration
 * Combines all design tokens into a cohesive theme system
 */

import { colors } from '../design-tokens/colors';
import { typography } from '../design-tokens/typography';
import { spacing } from '../design-tokens/spacing';
import { breakpoints } from '../design-tokens/breakpoints';
import { shadows } from '../design-tokens/shadows';
import { animations } from '../design-tokens/animations';

export const theme = {
  colors,
  typography,
  spacing,
  breakpoints,
  shadows,
  animations,
  
  // Border radius
  borderRadius: {
    none: '0px',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  
  // Z-index scale
  zIndex: {
    hide: -1,
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modalBackdrop: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
    notification: 1700,
  },
  
  // Opacity scale
  opacity: {
    0: '0',
    5: '0.05',
    10: '0.1',
    20: '0.2',
    25: '0.25',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    75: '0.75',
    80: '0.8',
    90: '0.9',
    95: '0.95',
    100: '1',
  },
} as const;

export type Theme = typeof theme;

// Theme context type
export interface ThemeContextValue {
  theme: Theme;
  mode: 'light' | 'dark';
  toggleMode: () => void;
}

export default theme;
