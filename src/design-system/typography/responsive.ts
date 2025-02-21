/**
 * Responsive Typography System
 */

import { responsiveText } from './utilities';

export const responsivePresets = {
  h1: responsiveText('3xl', '4xl', '5xl'),
  h2: responsiveText('2xl', '3xl', '4xl'),
  h3: responsiveText('xl', '2xl', '3xl'),
  h4: responsiveText('lg', 'xl', '2xl'),
  h5: responsiveText('base', 'lg', 'xl'),
  h6: responsiveText('sm', 'base', 'lg'),
  
  body: responsiveText('sm', 'base', 'base'),
  bodyLarge: responsiveText('base', 'lg', 'lg'),
};

export const fluidTypography = (
  minSize: number,
  maxSize: number,
  minViewport: number = 320,
  maxViewport: number = 1200
) => {
  const slope = (maxSize - minSize) / (maxViewport - minViewport);
  const yIntercept = minSize - slope * minViewport;
  
  return `clamp(${minSize}px, ${yIntercept}px + ${slope * 100}vw, ${maxSize}px)`;
};
