/**
 * Letter Spacing System
 */

export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

export type LetterSpacing = keyof typeof letterSpacings;

export const getLetterSpacing = (spacing: LetterSpacing): string => {
  return letterSpacings[spacing];
};
