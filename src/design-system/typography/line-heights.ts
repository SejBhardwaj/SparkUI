/**
 * Line Height Scale
 */

export const lineHeights = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

export type LineHeight = keyof typeof lineHeights;

export const getLineHeight = (height: LineHeight): number => {
  return lineHeights[height];
};

// Recommended line heights for different font sizes
export const recommendedLineHeights = {
  xs: lineHeights.normal,
  sm: lineHeights.normal,
  base: lineHeights.normal,
  lg: lineHeights.relaxed,
  xl: lineHeights.relaxed,
  '2xl': lineHeights.tight,
  '3xl': lineHeights.tight,
  '4xl': lineHeights.tight,
  '5xl': lineHeights.none,
  '6xl': lineHeights.none,
};
