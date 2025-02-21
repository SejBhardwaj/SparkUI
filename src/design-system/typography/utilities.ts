/**
 * Typography Utility Functions
 */

import { fontSizes, FontSize } from './sizes';
import { fontWeights, FontWeight } from './weights';
import { lineHeights, LineHeight } from './line-heights';

export const createTextStyle = (
  size: FontSize,
  weight: FontWeight,
  lineHeight: LineHeight
) => ({
  fontSize: fontSizes[size],
  fontWeight: fontWeights[weight],
  lineHeight: lineHeights[lineHeight],
});

export const truncateText = (maxLines: number) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: maxLines,
  WebkitBoxOrient: 'vertical' as const,
});

export const responsiveText = (
  mobile: FontSize,
  tablet: FontSize,
  desktop: FontSize
) => ({
  fontSize: fontSizes[mobile],
  '@media (min-width: 768px)': {
    fontSize: fontSizes[tablet],
  },
  '@media (min-width: 1024px)': {
    fontSize: fontSizes[desktop],
  },
});
