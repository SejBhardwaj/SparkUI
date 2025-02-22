/**
 * Spacing Utility Functions
 */

import { spacing, SpacingValue } from './scale';

export const createSpacing = (...values: SpacingValue[]) => {
  return values.map(v => spacing[v]).join(' ');
};

export const margin = {
  all: (value: SpacingValue) => ({ margin: spacing[value] }),
  x: (value: SpacingValue) => ({ marginLeft: spacing[value], marginRight: spacing[value] }),
  y: (value: SpacingValue) => ({ marginTop: spacing[value], marginBottom: spacing[value] }),
  top: (value: SpacingValue) => ({ marginTop: spacing[value] }),
  right: (value: SpacingValue) => ({ marginRight: spacing[value] }),
  bottom: (value: SpacingValue) => ({ marginBottom: spacing[value] }),
  left: (value: SpacingValue) => ({ marginLeft: spacing[value] }),
};

export const padding = {
  all: (value: SpacingValue) => ({ padding: spacing[value] }),
  x: (value: SpacingValue) => ({ paddingLeft: spacing[value], paddingRight: spacing[value] }),
  y: (value: SpacingValue) => ({ paddingTop: spacing[value], paddingBottom: spacing[value] }),
  top: (value: SpacingValue) => ({ paddingTop: spacing[value] }),
  right: (value: SpacingValue) => ({ paddingRight: spacing[value] }),
  bottom: (value: SpacingValue) => ({ paddingBottom: spacing[value] }),
  left: (value: SpacingValue) => ({ paddingLeft: spacing[value] }),
};

export const gap = (value: SpacingValue) => ({ gap: spacing[value] });
