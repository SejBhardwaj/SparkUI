/**
 * Typography Preset Styles
 */

import { createTextStyle } from './utilities';

export const textPresets = {
  h1: createTextStyle('5xl', 'bold', 'tight'),
  h2: createTextStyle('4xl', 'bold', 'tight'),
  h3: createTextStyle('3xl', 'semibold', 'snug'),
  h4: createTextStyle('2xl', 'semibold', 'snug'),
  h5: createTextStyle('xl', 'semibold', 'normal'),
  h6: createTextStyle('lg', 'semibold', 'normal'),
  
  bodyLarge: createTextStyle('lg', 'normal', 'relaxed'),
  body: createTextStyle('base', 'normal', 'normal'),
  bodySmall: createTextStyle('sm', 'normal', 'normal'),
  
  caption: createTextStyle('xs', 'normal', 'normal'),
  overline: createTextStyle('xs', 'semibold', 'normal'),
  
  buttonLarge: createTextStyle('base', 'semibold', 'tight'),
  button: createTextStyle('sm', 'semibold', 'tight'),
  buttonSmall: createTextStyle('xs', 'semibold', 'tight'),
};
